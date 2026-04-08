import { createTest } from './tests/test-runner'

createTest("parser", {
  id: "226",
  description: "class Pipeline completa com try-catch e ICEX",
  code: `class Pipeline {
    public id: string
    public threshold: int
    protected weights: int[]
    private _errors: int = 0
    private _processed: int = 0
    static totalRuns: int = 0
    static totalErrors: int = 0

    constructor(id: string, weights: int[], threshold: int) {
        this.id = id
        this.weights = weights
        this.threshold = threshold
        Pipeline.totalRuns = Pipeline.totalRuns + 1
    }

    static getGlobal(): int {
        return Pipeline.totalRuns * Pipeline.totalErrors - Pipeline.totalErrors
    }

    processRow(row: int[], idx: int): int {
        val result = 0
        try {
            if (row.length == 0) {
                throw new RangeError("empty row")
            }
            for (val k = 0; k < row.length && k < this.weights.length; k = k + 1) {
                try {
                    val cell = row[k] * this.weights[k] - this.threshold
                    if (cell < 0) {
                        throw new Error("negative cell")
                    }
                    result = result + cell
                    this._processed = this._processed + 1
                    if (result > this.threshold * row.length) {
                        break
                    }
                } catch (e: RangeError) {
                    this._errors = this._errors + 1
                    Pipeline.totalErrors = Pipeline.totalErrors + 1
                    continue
                } catch (e: Error) {
                    this._errors = this._errors + 1
                    result = result + row[k]
                } finally {
                    val cellDone = result >= 0 && this._errors >= 0
                }
            }
            if (result < 0) {
                throw new Error("negative result")
            }
        } catch (e: RangeError) {
            this._errors = this._errors + 1
            Pipeline.totalErrors = Pipeline.totalErrors + 1
            result = 0
        } catch (e: Error) {
            this._errors = this._errors + 1
            try {
                result = row[0] * this.weights[0]
                if (result < 0) {
                    throw "fallback negative"
                }
            } catch {
                result = 0
                Pipeline.totalErrors = Pipeline.totalErrors + 1
            } finally {
                val recovered = result >= 0
            }
        } finally {
            val rowDone = this._processed >= 0 && this._errors >= 0
        }
        return result
    }

    run(matrix: int[][]): string {
        val total = 0
        val i = 0
        val skipped = 0

        try {
            if (matrix.length == 0) {
                throw new Error("empty matrix")
            }

            while (i < matrix.length) {
                try {
                    val rowResult = this.processRow(matrix[i], i)
                    if (rowResult < 0 && this._errors > 0) {
                        skipped = skipped + 1
                        i = i + 1
                        continue
                    }
                    total = total + rowResult
                    if (total > this.threshold * matrix.length && this._errors == 0) {
                        break
                    }
                } catch (e: Error) {
                    skipped = skipped + 1
                    Pipeline.totalErrors = Pipeline.totalErrors + 1
                    try {
                        total = total + matrix[i][0]
                        if (total < 0) {
                            throw "recovery failed"
                        }
                    } catch {
                        total = 0
                    } finally {
                        val rowRecovered = total >= 0 && skipped >= 0
                    }
                } finally {
                    val iterDone = i < matrix.length && total >= 0
                }
                i = i + 1
            }

            if (total < 0 || this._errors > matrix.length) {
                throw new Error("pipeline failed")
            }

        } catch (e: Error) {
            this._errors = this._errors + 1
            total = 0
        } finally {
            val pipelineDone = this._processed >= 0 && Pipeline.totalErrors >= 0
        }

        val score = total * this.threshold - this._errors * this.weights[0] + Pipeline.getGlobal()
        val valid = total > 0 && this._errors < matrix.length && this._processed > skipped

        return <div
            id={this.id}
            class="pipeline"
            data-total={total}
            data-score={score}
            data-errors={this._errors}
            data-processed={this._processed}
            data-skipped={skipped}
            data-valid={valid}
            data-global={Pipeline.getGlobal()}
            data-runs={Pipeline.totalRuns}
            data-flag={valid && score > this.threshold && this._errors == 0 && Pipeline.totalErrors == 0}
            data-chain={total * this.weights[0] - this._errors * this.threshold + Pipeline.totalRuns * score}
        >
            <header
                data-score={score}
                data-valid={valid}
                data-errors={this._errors}
                data-global={Pipeline.getGlobal()}
            >
                <h1 data-val={total}>Pipeline {this.id}</h1>
                <span data-flag={valid && this._errors == 0}>
                    Score: {score} / {this.threshold}
                </span>
                <small
                    data-errors={this._errors}
                    data-global={Pipeline.totalErrors}
                    data-flag={this._errors == 0 && Pipeline.totalErrors == 0}
                >
                    Errors: {this._errors} · Global: {Pipeline.totalErrors}
                </small>
            </header>
            <section
                data-processed={this._processed}
                data-skipped={skipped}
                data-ratio={this._processed * 100 / (this._processed + skipped + 1)}
                data-valid={valid}
            >
                <span data-val={this._processed}>Processed: {this._processed}</span>
                <span data-val={skipped} data-flag={skipped == 0}>Skipped: {skipped}</span>
                <span
                    data-total={total}
                    data-score={score}
                    data-flag={score > 0 && valid && !false}
                >
                    Total: {total} · Runs: {Pipeline.totalRuns}
                </span>
            </section>
            <footer
                data-valid={valid}
                data-global={Pipeline.getGlobal()}
                data-flag={valid && score > 0 && Pipeline.totalErrors == 0 && this._errors == 0}
            >
                <button
                    data-action="retry"
                    disabled={this._errors == 0 || Pipeline.totalRuns == 0}
                    data-errors={this._errors}
                >
                    Retry ({this._errors} errors)
                </button>
            </footer>
        </div>
    }
}

val p = new Pipeline("main", [1, 2, 3, 4, 5], 100)
val result = p.run([[10, 20, 30], [40, 50, 60], [70, 80, 90]])

val globalCheck = Pipeline.getGlobal() * Pipeline.totalRuns - Pipeline.totalErrors + Pipeline.totalRuns
val isValid = Pipeline.totalErrors == 0 && Pipeline.totalRuns > 0 && !false`
})
