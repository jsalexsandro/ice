@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "CLI_PATH=%SCRIPT_DIR%src\cli\index.ts"

if "%~1"=="" (
    echo Usage: ice ^(file.ice^)
    echo        ice --help
    exit /b 1
)

bun run "%CLI_PATH%" %*

endlocal
