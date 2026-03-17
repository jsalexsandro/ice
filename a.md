=== TESTE BRUTAL ===
Código: 
a.b[f(x.y[g(h.i[compute(p * -q.r[s.t(u.v[0], w.x())], !(a.b() == c[d.e(f, g.h[0])]))], j.k(l.m[n.o(p.q[0], r.s())], !(t.u() && v[w.x(y, z.a[0])])))], z.w[process(getIdx(a.b[getFoo(x.y[0], z.w())], c.d[getBar(m.n(), p[q.r[0]])]), compute(x + y * -z.w[idx.get(a.b[0], c.d())], !(f.g() || h[i.j(k.l[0], m.n())])))])].c(d[e[f(getIdx(a.b[0], c.d()))]].g[h.i[j.k()]].n, !(k.l() == m[n.o(p * -q.r[s.t(u.v[0], w.x())], !(a.b() == c[d.e(f, g.h[0])]))]) && u.v[compute(w + x * -y.z[idx.get(a.b[0])], !(f.g(a.b[0], c.d()) || h[i.j()]))], arr[getIdx(a.b[getFoo(x.y[0], z.w(a.b[0], c.d()))], c.d[getBar(m.n(x.y[0]), p[q.r[s.t()]])])][compute(x + y * -z.w[idx.get(a.b[getFoo(0, n.size())], c.d())], !(f.g() || h[i.j(k.l[0], m.n())]))].transform)[n.o(p + q * -r.s[compute(a[b][c.d(e.f[0], g.h())], !(e.f() && g[h.i(j.k[0], l.m())]))])] = cache[getKey(a.b[getFoo(x.y[getIdx(0, n.size())], z.w(a.b[0], c.d()))], c.d[getBar(m.n(x.y[0], z.w()), p[q.r[s.t(u.v[0])]])])].items[idx.get(compute(a + b * -c.d[getFoo(0, n.size())], !(f.g(a.b[0]) || h[i.j(k.l[0], m.n())])))].data[result.index.get(a.b[getFoo(x.y[0], z.w())], c.d(getBar(m.n(), p[q.r[0]])))].entries[getIdx(n.fetch(a.b[compute(x + y, -z.w[0])], c.d()), m.retrieve[getKey(x.y[0], y.z[getIdx(a, b.c[getFoo(0, n.size())])])])].process()[offset.calculate(base + step * -factor.get[idx.current(a.b[getIdx(0, n.size())], c.d())])].result = process(arr[i][j + k.offset(x.y[getFoo(0, n.size())], z.w(a.b[0], c.d()))].transform(x * y + -z.w[compute(a.b[0], b.c(getIdx(n, m.size())))], !ready.check(a.b[getIdx(0, n.size(a.b[0], c.d()))], z.w()), obj.data[key].entries[getFoo(0, n.size())].status), cache[getKey(n, m.vol[getFoo(a + b * -c.d[getIdx(0, n.size())], !(f.g() == h[i.j(k.l[0])]))])].items[idx.get()].entries[compute(x.y[0], y.z[0])][result.index.get(a.b[getFoo(0, n.size())], c.d(getBar(m.n(), p[q.r[0]])))].process()[0].transform(base * -step.factor[idx.current(a.b[getFoo(0, n.size())], c.d())], !(x.y() && z[w.v(a.b[0], c.d())] == h(i, j.k[l.m(n.o(p.q[0], r.s()))]))), !(a.b.c(x.y[getIdx(0, n.size())], z.w()) && d[e][f.g(compute(x + y, -z.w[getFoo(0, n.size())]))] == h(i, j.k[l()]) || !(m.n[getIdx(a.b[0], b.c[getFoo(0, n.size())])].process(x.y[0], z.w()) == cache[getKey(n, m.vol[0])].items[getFoo(0, n.size())].status && ready.check(x.y[compute(a + b, -c.d[0])], z.w(a.b[getIdx(0, n.size())], c.d())))), compute(a.b[getFoo(x.y[0], z.w(a.b[0], c.d()))][getIdx(n.fetch(a.b[0], c.d()), m.retrieve[getKey(x, y.z[0])])].process(x * y + -z.w[compute(a, b)], !ready.check(a.b[0], z.w())) + -b.c[getIdx(n.fetch(a.b[compute(x, y)], c.d(getFoo(0, n.size()))), m.retrieve[getKey(x.y[0], y.z[getIdx(a, b.c[0])])])].transform(base * -step.factor[idx.current(a.b[0])], !(x.y() && z[w.v()] == h(i, j.k[l.m(n.o())]))), !(a.b.c() && d[e.f[getIdx(0, n.size())]].g(compute(x + y, -z.w[0])) == h(i.j[0], k.l[m.n(n.o(p.q[0]))]) || !(m.n[getIdx(a, b.c[getFoo(0, n.size())])].process() == cache[getKey(n, m.vol[getFoo(a + b, -c.d[0])])].items[0].status && ready.check(x.y[compute(a + b, -c.d[getIdx(0, n.size())])], z.w(a.b[0], c.d()))))))


AST:
{
  "kind": "Program",
  "body": [
    {
      "kind": "ExpressionStmt",
      "expression": {
        "kind": "Assign",
        "name": {
          "kind": "Index",
          "object": {
            "kind": "Call",
            "callee": {
              "kind": "Member",
              "object": {
                "kind": "Index",
                "object": {
                  "kind": "Member",
                  "object": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "a",
                      "line": 2,
                      "column": 0
                    }
                  },
                  "property": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "b",
                      "line": 2,
                      "column": 2
                    }
                  }
                },
                "index": {
                  "kind": "Call",
                  "callee": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "f",
                      "line": 2,
                      "column": 4
                    }
                  },
                  "args": [
                    {
                      "kind": "Index",
                      "object": {
                        "kind": "Member",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "x",
                            "line": 2,
                            "column": 6
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "y",
                            "line": 2,
                            "column": 8
                          }
                        }
                      },
                      "index": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "g",
                            "line": 2,
                            "column": 10
                          }
                        },
                        "args": [
                          {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "h",
                                  "line": 2,
                                  "column": 12
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "i",
                                  "line": 2,
                                  "column": 14
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "compute",
                                  "line": 2,
                                  "column": 16
                                }
                              },
                              "args": [
                                {
                                  "kind": "Binary",
                                  "left": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "p",
                                      "line": 2,
                                      "column": 24
                                    }
                                  },
                                  "operator": {
                                    "type": "STAR",
                                    "value": "*",
                                    "line": 2,
                                    "column": 26
                                  },
                                  "right": {
                                    "kind": "Unary",
                                    "operator": {
                                      "type": "MINUS",
                                      "value": "-",
                                      "line": 2,
                                      "column": 28
                                    },
                                    "right": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "q",
                                            "line": 2,
                                            "column": 29
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "r",
                                            "line": 2,
                                            "column": 31
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "s",
                                              "line": 2,
                                              "column": 33
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "t",
                                              "line": 2,
                                              "column": 35
                                            }
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "u",
                                                  "line": 2,
                                                  "column": 37
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "v",
                                                  "line": 2,
                                                  "column": 39
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Literal",
                                              "value": 0
                                            }
                                          },
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "w",
                                                  "line": 2,
                                                  "column": 45
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "x",
                                                  "line": 2,
                                                  "column": 47
                                                }
                                              }
                                            },
                                            "args": []
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                {
                                  "kind": "Unary",
                                  "operator": {
                                    "type": "NOT",
                                    "value": "!",
                                    "line": 2,
                                    "column": 54
                                  },
                                  "right": {
                                    "kind": "Group",
                                    "expression": {
                                      "kind": "Binary",
                                      "left": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "a",
                                              "line": 2,
                                              "column": 56
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "b",
                                              "line": 2,
                                              "column": 58
                                            }
                                          }
                                        },
                                        "args": []
                                      },
                                      "operator": {
                                        "type": "EQUAL",
                                        "value": "==",
                                        "line": 2,
                                        "column": 62
                                      },
                                      "right": {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "c",
                                            "line": 2,
                                            "column": 65
                                          }
                                        },
                                        "index": {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "d",
                                                "line": 2,
                                                "column": 67
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "e",
                                                "line": 2,
                                                "column": 69
                                              }
                                            }
                                          },
                                          "args": [
                                            {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "f",
                                                "line": 2,
                                                "column": 71
                                              }
                                            },
                                            {
                                              "kind": "Index",
                                              "object": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "g",
                                                    "line": 2,
                                                    "column": 74
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "h",
                                                    "line": 2,
                                                    "column": 76
                                                  }
                                                }
                                              },
                                              "index": {
                                                "kind": "Literal",
                                                "value": 0
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "j",
                                  "line": 2,
                                  "column": 87
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "k",
                                  "line": 2,
                                  "column": 89
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "l",
                                      "line": 2,
                                      "column": 91
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "m",
                                      "line": 2,
                                      "column": 93
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "n",
                                        "line": 2,
                                        "column": 95
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "o",
                                        "line": 2,
                                        "column": 97
                                      }
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "p",
                                            "line": 2,
                                            "column": 99
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "q",
                                            "line": 2,
                                            "column": 101
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Literal",
                                        "value": 0
                                      }
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "r",
                                            "line": 2,
                                            "column": 107
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "s",
                                            "line": 2,
                                            "column": 109
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              },
                              {
                                "kind": "Unary",
                                "operator": {
                                  "type": "NOT",
                                  "value": "!",
                                  "line": 2,
                                  "column": 116
                                },
                                "right": {
                                  "kind": "Group",
                                  "expression": {
                                    "kind": "Logical",
                                    "left": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "t",
                                            "line": 2,
                                            "column": 118
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "u",
                                            "line": 2,
                                            "column": 120
                                          }
                                        }
                                      },
                                      "args": []
                                    },
                                    "operator": {
                                      "type": "AND",
                                      "value": "&&",
                                      "line": 2,
                                      "column": 124
                                    },
                                    "right": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "v",
                                          "line": 2,
                                          "column": 127
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "w",
                                              "line": 2,
                                              "column": 129
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "x",
                                              "line": 2,
                                              "column": 131
                                            }
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "y",
                                              "line": 2,
                                              "column": 133
                                            }
                                          },
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "z",
                                                  "line": 2,
                                                  "column": 136
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "a",
                                                  "line": 2,
                                                  "column": 138
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Literal",
                                              "value": 0
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "kind": "Index",
                      "object": {
                        "kind": "Member",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "z",
                            "line": 2,
                            "column": 150
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "w",
                            "line": 2,
                            "column": 152
                          }
                        }
                      },
                      "index": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "process",
                            "line": 2,
                            "column": 154
                          }
                        },
                        "args": [
                          {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "getIdx",
                                "line": 2,
                                "column": 162
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "a",
                                      "line": 2,
                                      "column": 169
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "b",
                                      "line": 2,
                                      "column": 171
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getFoo",
                                      "line": 2,
                                      "column": 173
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "x",
                                            "line": 2,
                                            "column": 180
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "y",
                                            "line": 2,
                                            "column": 182
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Literal",
                                        "value": 0
                                      }
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "z",
                                            "line": 2,
                                            "column": 188
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "w",
                                            "line": 2,
                                            "column": 190
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              },
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "c",
                                      "line": 2,
                                      "column": 197
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "d",
                                      "line": 2,
                                      "column": 199
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getBar",
                                      "line": 2,
                                      "column": 201
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "m",
                                            "line": 2,
                                            "column": 208
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 210
                                          }
                                        }
                                      },
                                      "args": []
                                    },
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "p",
                                          "line": 2,
                                          "column": 215
                                        }
                                      },
                                      "index": {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "q",
                                              "line": 2,
                                              "column": 217
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "r",
                                              "line": 2,
                                              "column": 219
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "compute",
                                "line": 2,
                                "column": 229
                              }
                            },
                            "args": [
                              {
                                "kind": "Binary",
                                "left": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "x",
                                    "line": 2,
                                    "column": 237
                                  }
                                },
                                "operator": {
                                  "type": "PLUS",
                                  "value": "+",
                                  "line": 2,
                                  "column": 239
                                },
                                "right": {
                                  "kind": "Binary",
                                  "left": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "y",
                                      "line": 2,
                                      "column": 241
                                    }
                                  },
                                  "operator": {
                                    "type": "STAR",
                                    "value": "*",
                                    "line": 2,
                                    "column": 243
                                  },
                                  "right": {
                                    "kind": "Unary",
                                    "operator": {
                                      "type": "MINUS",
                                      "value": "-",
                                      "line": 2,
                                      "column": 245
                                    },
                                    "right": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "z",
                                            "line": 2,
                                            "column": 246
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "w",
                                            "line": 2,
                                            "column": 248
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "idx",
                                              "line": 2,
                                              "column": 250
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "get",
                                              "line": 2,
                                              "column": 254
                                            }
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "a",
                                                  "line": 2,
                                                  "column": 258
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "b",
                                                  "line": 2,
                                                  "column": 260
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Literal",
                                              "value": 0
                                            }
                                          },
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "c",
                                                  "line": 2,
                                                  "column": 266
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "d",
                                                  "line": 2,
                                                  "column": 268
                                                }
                                              }
                                            },
                                            "args": []
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              },
                              {
                                "kind": "Unary",
                                "operator": {
                                  "type": "NOT",
                                  "value": "!",
                                  "line": 2,
                                  "column": 275
                                },
                                "right": {
                                  "kind": "Group",
                                  "expression": {
                                    "kind": "Logical",
                                    "left": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "f",
                                            "line": 2,
                                            "column": 277
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "g",
                                            "line": 2,
                                            "column": 279
                                          }
                                        }
                                      },
                                      "args": []
                                    },
                                    "operator": {
                                      "type": "OR",
                                      "value": "||",
                                      "line": 2,
                                      "column": 283
                                    },
                                    "right": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "h",
                                          "line": 2,
                                          "column": 286
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "i",
                                              "line": 2,
                                              "column": 288
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "j",
                                              "line": 2,
                                              "column": 290
                                            }
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "k",
                                                  "line": 2,
                                                  "column": 292
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "l",
                                                  "line": 2,
                                                  "column": 294
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Literal",
                                              "value": 0
                                            }
                                          },
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "m",
                                                  "line": 2,
                                                  "column": 300
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "n",
                                                  "line": 2,
                                                  "column": 302
                                                }
                                              }
                                            },
                                            "args": []
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              "property": {
                "kind": "Identifier",
                "name": {
                  "type": "IDENTIFIER",
                  "value": "c",
                  "line": 2,
                  "column": 314
                }
              }
            },
            "args": [
              {
                "kind": "Member",
                "object": {
                  "kind": "Index",
                  "object": {
                    "kind": "Member",
                    "object": {
                      "kind": "Index",
                      "object": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "d",
                          "line": 2,
                          "column": 316
                        }
                      },
                      "index": {
                        "kind": "Index",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "e",
                            "line": 2,
                            "column": 318
                          }
                        },
                        "index": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "f",
                              "line": 2,
                              "column": 320
                            }
                          },
                          "args": [
                            {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "getIdx",
                                  "line": 2,
                                  "column": 322
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "a",
                                        "line": 2,
                                        "column": 329
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "b",
                                        "line": 2,
                                        "column": 331
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "c",
                                        "line": 2,
                                        "column": 337
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "d",
                                        "line": 2,
                                        "column": 339
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            }
                          ]
                        }
                      }
                    },
                    "property": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "g",
                        "line": 2,
                        "column": 347
                      }
                    }
                  },
                  "index": {
                    "kind": "Index",
                    "object": {
                      "kind": "Member",
                      "object": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "h",
                          "line": 2,
                          "column": 349
                        }
                      },
                      "property": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "i",
                          "line": 2,
                          "column": 351
                        }
                      }
                    },
                    "index": {
                      "kind": "Call",
                      "callee": {
                        "kind": "Member",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "j",
                            "line": 2,
                            "column": 353
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "k",
                            "line": 2,
                            "column": 355
                          }
                        }
                      },
                      "args": []
                    }
                  }
                },
                "property": {
                  "kind": "Identifier",
                  "name": {
                    "type": "IDENTIFIER",
                    "value": "n",
                    "line": 2,
                    "column": 361
                  }
                }
              },
              {
                "kind": "Logical",
                "left": {
                  "kind": "Unary",
                  "operator": {
                    "type": "NOT",
                    "value": "!",
                    "line": 2,
                    "column": 364
                  },
                  "right": {
                    "kind": "Group",
                    "expression": {
                      "kind": "Binary",
                      "left": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Member",
                          "object": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "k",
                              "line": 2,
                              "column": 366
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "l",
                              "line": 2,
                              "column": 368
                            }
                          }
                        },
                        "args": []
                      },
                      "operator": {
                        "type": "EQUAL",
                        "value": "==",
                        "line": 2,
                        "column": 372
                      },
                      "right": {
                        "kind": "Index",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "m",
                            "line": 2,
                            "column": 375
                          }
                        },
                        "index": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "n",
                                "line": 2,
                                "column": 377
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "o",
                                "line": 2,
                                "column": 379
                              }
                            }
                          },
                          "args": [
                            {
                              "kind": "Binary",
                              "left": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "p",
                                  "line": 2,
                                  "column": 381
                                }
                              },
                              "operator": {
                                "type": "STAR",
                                "value": "*",
                                "line": 2,
                                "column": 383
                              },
                              "right": {
                                "kind": "Unary",
                                "operator": {
                                  "type": "MINUS",
                                  "value": "-",
                                  "line": 2,
                                  "column": 385
                                },
                                "right": {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "q",
                                        "line": 2,
                                        "column": 386
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "r",
                                        "line": 2,
                                        "column": 388
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "s",
                                          "line": 2,
                                          "column": 390
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "t",
                                          "line": 2,
                                          "column": 392
                                        }
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "u",
                                              "line": 2,
                                              "column": 394
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "v",
                                              "line": 2,
                                              "column": 396
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "w",
                                              "line": 2,
                                              "column": 402
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "x",
                                              "line": 2,
                                              "column": 404
                                            }
                                          }
                                        },
                                        "args": []
                                      }
                                    ]
                                  }
                                }
                              }
                            },
                            {
                              "kind": "Unary",
                              "operator": {
                                "type": "NOT",
                                "value": "!",
                                "line": 2,
                                "column": 411
                              },
                              "right": {
                                "kind": "Group",
                                "expression": {
                                  "kind": "Binary",
                                  "left": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 413
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 415
                                        }
                                      }
                                    },
                                    "args": []
                                  },
                                  "operator": {
                                    "type": "EQUAL",
                                    "value": "==",
                                    "line": 2,
                                    "column": 419
                                  },
                                  "right": {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "c",
                                        "line": 2,
                                        "column": 422
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "d",
                                            "line": 2,
                                            "column": 424
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "e",
                                            "line": 2,
                                            "column": 426
                                          }
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "f",
                                            "line": 2,
                                            "column": 428
                                          }
                                        },
                                        {
                                          "kind": "Index",
                                          "object": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "g",
                                                "line": 2,
                                                "column": 431
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "h",
                                                "line": 2,
                                                "column": 433
                                              }
                                            }
                                          },
                                          "index": {
                                            "kind": "Literal",
                                            "value": 0
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "operator": {
                  "type": "AND",
                  "value": "&&",
                  "line": 2,
                  "column": 444
                },
                "right": {
                  "kind": "Index",
                  "object": {
                    "kind": "Member",
                    "object": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "u",
                        "line": 2,
                        "column": 447
                      }
                    },
                    "property": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "v",
                        "line": 2,
                        "column": 449
                      }
                    }
                  },
                  "index": {
                    "kind": "Call",
                    "callee": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "compute",
                        "line": 2,
                        "column": 451
                      }
                    },
                    "args": [
                      {
                        "kind": "Binary",
                        "left": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "w",
                            "line": 2,
                            "column": 459
                          }
                        },
                        "operator": {
                          "type": "PLUS",
                          "value": "+",
                          "line": 2,
                          "column": 461
                        },
                        "right": {
                          "kind": "Binary",
                          "left": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "x",
                              "line": 2,
                              "column": 463
                            }
                          },
                          "operator": {
                            "type": "STAR",
                            "value": "*",
                            "line": 2,
                            "column": 465
                          },
                          "right": {
                            "kind": "Unary",
                            "operator": {
                              "type": "MINUS",
                              "value": "-",
                              "line": 2,
                              "column": 467
                            },
                            "right": {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "y",
                                    "line": 2,
                                    "column": 468
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "z",
                                    "line": 2,
                                    "column": 470
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "idx",
                                      "line": 2,
                                      "column": 472
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "get",
                                      "line": 2,
                                      "column": 476
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 480
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 482
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "kind": "Unary",
                        "operator": {
                          "type": "NOT",
                          "value": "!",
                          "line": 2,
                          "column": 490
                        },
                        "right": {
                          "kind": "Group",
                          "expression": {
                            "kind": "Logical",
                            "left": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "f",
                                    "line": 2,
                                    "column": 492
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "g",
                                    "line": 2,
                                    "column": 494
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "a",
                                        "line": 2,
                                        "column": 496
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "b",
                                        "line": 2,
                                        "column": 498
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "c",
                                        "line": 2,
                                        "column": 504
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "d",
                                        "line": 2,
                                        "column": 506
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            },
                            "operator": {
                              "type": "OR",
                              "value": "||",
                              "line": 2,
                              "column": 511
                            },
                            "right": {
                              "kind": "Index",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "h",
                                  "line": 2,
                                  "column": 514
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "i",
                                      "line": 2,
                                      "column": 516
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "j",
                                      "line": 2,
                                      "column": 518
                                    }
                                  }
                                },
                                "args": []
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              },
              {
                "kind": "Member",
                "object": {
                  "kind": "Index",
                  "object": {
                    "kind": "Index",
                    "object": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "arr",
                        "line": 2,
                        "column": 527
                      }
                    },
                    "index": {
                      "kind": "Call",
                      "callee": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "getIdx",
                          "line": 2,
                          "column": 531
                        }
                      },
                      "args": [
                        {
                          "kind": "Index",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "a",
                                "line": 2,
                                "column": 538
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "b",
                                "line": 2,
                                "column": 540
                              }
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "getFoo",
                                "line": 2,
                                "column": 542
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "x",
                                      "line": 2,
                                      "column": 549
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "y",
                                      "line": 2,
                                      "column": 551
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Literal",
                                  "value": 0
                                }
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "z",
                                      "line": 2,
                                      "column": 557
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "w",
                                      "line": 2,
                                      "column": 559
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 561
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 563
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "c",
                                          "line": 2,
                                          "column": 569
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "d",
                                          "line": 2,
                                          "column": 571
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "kind": "Index",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "c",
                                "line": 2,
                                "column": 579
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "d",
                                "line": 2,
                                "column": 581
                              }
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "getBar",
                                "line": 2,
                                "column": 583
                              }
                            },
                            "args": [
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "m",
                                      "line": 2,
                                      "column": 590
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "n",
                                      "line": 2,
                                      "column": 592
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "x",
                                          "line": 2,
                                          "column": 594
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "y",
                                          "line": 2,
                                          "column": 596
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  }
                                ]
                              },
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "p",
                                    "line": 2,
                                    "column": 603
                                  }
                                },
                                "index": {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "q",
                                        "line": 2,
                                        "column": 605
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "r",
                                        "line": 2,
                                        "column": 607
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "s",
                                          "line": 2,
                                          "column": 609
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "t",
                                          "line": 2,
                                          "column": 611
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "index": {
                    "kind": "Call",
                    "callee": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "compute",
                        "line": 2,
                        "column": 621
                      }
                    },
                    "args": [
                      {
                        "kind": "Binary",
                        "left": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "x",
                            "line": 2,
                            "column": 629
                          }
                        },
                        "operator": {
                          "type": "PLUS",
                          "value": "+",
                          "line": 2,
                          "column": 631
                        },
                        "right": {
                          "kind": "Binary",
                          "left": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "y",
                              "line": 2,
                              "column": 633
                            }
                          },
                          "operator": {
                            "type": "STAR",
                            "value": "*",
                            "line": 2,
                            "column": 635
                          },
                          "right": {
                            "kind": "Unary",
                            "operator": {
                              "type": "MINUS",
                              "value": "-",
                              "line": 2,
                              "column": 637
                            },
                            "right": {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "z",
                                    "line": 2,
                                    "column": 638
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "w",
                                    "line": 2,
                                    "column": 640
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "idx",
                                      "line": 2,
                                      "column": 642
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "get",
                                      "line": 2,
                                      "column": 646
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 650
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 652
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "getFoo",
                                          "line": 2,
                                          "column": 654
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Literal",
                                          "value": 0
                                        },
                                        {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "n",
                                                "line": 2,
                                                "column": 664
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "size",
                                                "line": 2,
                                                "column": 666
                                              }
                                            }
                                          },
                                          "args": []
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "c",
                                          "line": 2,
                                          "column": 676
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "d",
                                          "line": 2,
                                          "column": 678
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "kind": "Unary",
                        "operator": {
                          "type": "NOT",
                          "value": "!",
                          "line": 2,
                          "column": 685
                        },
                        "right": {
                          "kind": "Group",
                          "expression": {
                            "kind": "Logical",
                            "left": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "f",
                                    "line": 2,
                                    "column": 687
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "g",
                                    "line": 2,
                                    "column": 689
                                  }
                                }
                              },
                              "args": []
                            },
                            "operator": {
                              "type": "OR",
                              "value": "||",
                              "line": 2,
                              "column": 693
                            },
                            "right": {
                              "kind": "Index",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "h",
                                  "line": 2,
                                  "column": 696
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "i",
                                      "line": 2,
                                      "column": 698
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "j",
                                      "line": 2,
                                      "column": 700
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "k",
                                          "line": 2,
                                          "column": 702
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "l",
                                          "line": 2,
                                          "column": 704
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "m",
                                          "line": 2,
                                          "column": 710
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "n",
                                          "line": 2,
                                          "column": 712
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                "property": {
                  "kind": "Identifier",
                  "name": {
                    "type": "IDENTIFIER",
                    "value": "transform",
                    "line": 2,
                    "column": 721
                  }
                }
              }
            ]
          },
          "index": {
            "kind": "Call",
            "callee": {
              "kind": "Member",
              "object": {
                "kind": "Identifier",
                "name": {
                  "type": "IDENTIFIER",
                  "value": "n",
                  "line": 2,
                  "column": 732
                }
              },
              "property": {
                "kind": "Identifier",
                "name": {
                  "type": "IDENTIFIER",
                  "value": "o",
                  "line": 2,
                  "column": 734
                }
              }
            },
            "args": [
              {
                "kind": "Binary",
                "left": {
                  "kind": "Identifier",
                  "name": {
                    "type": "IDENTIFIER",
                    "value": "p",
                    "line": 2,
                    "column": 736
                  }
                },
                "operator": {
                  "type": "PLUS",
                  "value": "+",
                  "line": 2,
                  "column": 738
                },
                "right": {
                  "kind": "Binary",
                  "left": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "q",
                      "line": 2,
                      "column": 740
                    }
                  },
                  "operator": {
                    "type": "STAR",
                    "value": "*",
                    "line": 2,
                    "column": 742
                  },
                  "right": {
                    "kind": "Unary",
                    "operator": {
                      "type": "MINUS",
                      "value": "-",
                      "line": 2,
                      "column": 744
                    },
                    "right": {
                      "kind": "Index",
                      "object": {
                        "kind": "Member",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "r",
                            "line": 2,
                            "column": 745
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "s",
                            "line": 2,
                            "column": 747
                          }
                        }
                      },
                      "index": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "compute",
                            "line": 2,
                            "column": 749
                          }
                        },
                        "args": [
                          {
                            "kind": "Index",
                            "object": {
                              "kind": "Index",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "a",
                                  "line": 2,
                                  "column": 757
                                }
                              },
                              "index": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "b",
                                  "line": 2,
                                  "column": 759
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "c",
                                    "line": 2,
                                    "column": 762
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "d",
                                    "line": 2,
                                    "column": 764
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "e",
                                        "line": 2,
                                        "column": 766
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "f",
                                        "line": 2,
                                        "column": 768
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "g",
                                        "line": 2,
                                        "column": 774
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "h",
                                        "line": 2,
                                        "column": 776
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            }
                          },
                          {
                            "kind": "Unary",
                            "operator": {
                              "type": "NOT",
                              "value": "!",
                              "line": 2,
                              "column": 783
                            },
                            "right": {
                              "kind": "Group",
                              "expression": {
                                "kind": "Logical",
                                "left": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "e",
                                        "line": 2,
                                        "column": 785
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "f",
                                        "line": 2,
                                        "column": 787
                                      }
                                    }
                                  },
                                  "args": []
                                },
                                "operator": {
                                  "type": "AND",
                                  "value": "&&",
                                  "line": 2,
                                  "column": 791
                                },
                                "right": {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "g",
                                      "line": 2,
                                      "column": 794
                                    }
                                  },
                                  "index": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "h",
                                          "line": 2,
                                          "column": 796
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "i",
                                          "line": 2,
                                          "column": 798
                                        }
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "j",
                                              "line": 2,
                                              "column": 800
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "k",
                                              "line": 2,
                                              "column": 802
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "l",
                                              "line": 2,
                                              "column": 808
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "m",
                                              "line": 2,
                                              "column": 810
                                            }
                                          }
                                        },
                                        "args": []
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ]
          }
        },
        "value": {
          "kind": "Assign",
          "name": {
            "kind": "Member",
            "object": {
              "kind": "Index",
              "object": {
                "kind": "Call",
                "callee": {
                  "kind": "Member",
                  "object": {
                    "kind": "Index",
                    "object": {
                      "kind": "Member",
                      "object": {
                        "kind": "Index",
                        "object": {
                          "kind": "Member",
                          "object": {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Index",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "cache",
                                    "line": 2,
                                    "column": 823
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getKey",
                                      "line": 2,
                                      "column": 829
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "a",
                                            "line": 2,
                                            "column": 836
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "b",
                                            "line": 2,
                                            "column": 838
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "getFoo",
                                            "line": 2,
                                            "column": 840
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "x",
                                                  "line": 2,
                                                  "column": 847
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "y",
                                                  "line": 2,
                                                  "column": 849
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "getIdx",
                                                  "line": 2,
                                                  "column": 851
                                                }
                                              },
                                              "args": [
                                                {
                                                  "kind": "Literal",
                                                  "value": 0
                                                },
                                                {
                                                  "kind": "Call",
                                                  "callee": {
                                                    "kind": "Member",
                                                    "object": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "n",
                                                        "line": 2,
                                                        "column": 861
                                                      }
                                                    },
                                                    "property": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "size",
                                                        "line": 2,
                                                        "column": 863
                                                      }
                                                    }
                                                  },
                                                  "args": []
                                                }
                                              ]
                                            }
                                          },
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "z",
                                                  "line": 2,
                                                  "column": 873
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "w",
                                                  "line": 2,
                                                  "column": 875
                                                }
                                              }
                                            },
                                            "args": [
                                              {
                                                "kind": "Index",
                                                "object": {
                                                  "kind": "Member",
                                                  "object": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "a",
                                                      "line": 2,
                                                      "column": 877
                                                    }
                                                  },
                                                  "property": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "b",
                                                      "line": 2,
                                                      "column": 879
                                                    }
                                                  }
                                                },
                                                "index": {
                                                  "kind": "Literal",
                                                  "value": 0
                                                }
                                              },
                                              {
                                                "kind": "Call",
                                                "callee": {
                                                  "kind": "Member",
                                                  "object": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "c",
                                                      "line": 2,
                                                      "column": 885
                                                    }
                                                  },
                                                  "property": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "d",
                                                      "line": 2,
                                                      "column": 887
                                                    }
                                                  }
                                                },
                                                "args": []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "c",
                                            "line": 2,
                                            "column": 895
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "d",
                                            "line": 2,
                                            "column": 897
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "getBar",
                                            "line": 2,
                                            "column": 899
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "m",
                                                  "line": 2,
                                                  "column": 906
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "n",
                                                  "line": 2,
                                                  "column": 908
                                                }
                                              }
                                            },
                                            "args": [
                                              {
                                                "kind": "Index",
                                                "object": {
                                                  "kind": "Member",
                                                  "object": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "x",
                                                      "line": 2,
                                                      "column": 910
                                                    }
                                                  },
                                                  "property": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "y",
                                                      "line": 2,
                                                      "column": 912
                                                    }
                                                  }
                                                },
                                                "index": {
                                                  "kind": "Literal",
                                                  "value": 0
                                                }
                                              },
                                              {
                                                "kind": "Call",
                                                "callee": {
                                                  "kind": "Member",
                                                  "object": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "z",
                                                      "line": 2,
                                                      "column": 918
                                                    }
                                                  },
                                                  "property": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "w",
                                                      "line": 2,
                                                      "column": 920
                                                    }
                                                  }
                                                },
                                                "args": []
                                              }
                                            ]
                                          },
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "p",
                                                "line": 2,
                                                "column": 926
                                              }
                                            },
                                            "index": {
                                              "kind": "Index",
                                              "object": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "q",
                                                    "line": 2,
                                                    "column": 928
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "r",
                                                    "line": 2,
                                                    "column": 930
                                                  }
                                                }
                                              },
                                              "index": {
                                                "kind": "Call",
                                                "callee": {
                                                  "kind": "Member",
                                                  "object": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "s",
                                                      "line": 2,
                                                      "column": 932
                                                    }
                                                  },
                                                  "property": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "t",
                                                      "line": 2,
                                                      "column": 934
                                                    }
                                                  }
                                                },
                                                "args": [
                                                  {
                                                    "kind": "Index",
                                                    "object": {
                                                      "kind": "Member",
                                                      "object": {
                                                        "kind": "Identifier",
                                                        "name": {
                                                          "type": "IDENTIFIER",
                                                          "value": "u",
                                                          "line": 2,
                                                          "column": 936
                                                        }
                                                      },
                                                      "property": {
                                                        "kind": "Identifier",
                                                        "name": {
                                                          "type": "IDENTIFIER",
                                                          "value": "v",
                                                          "line": 2,
                                                          "column": 938
                                                        }
                                                      }
                                                    },
                                                    "index": {
                                                      "kind": "Literal",
                                                      "value": 0
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "items",
                                  "line": 2,
                                  "column": 950
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "idx",
                                    "line": 2,
                                    "column": 956
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "get",
                                    "line": 2,
                                    "column": 960
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "compute",
                                      "line": 2,
                                      "column": 964
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Binary",
                                      "left": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 972
                                        }
                                      },
                                      "operator": {
                                        "type": "PLUS",
                                        "value": "+",
                                        "line": 2,
                                        "column": 974
                                      },
                                      "right": {
                                        "kind": "Binary",
                                        "left": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "b",
                                            "line": 2,
                                            "column": 976
                                          }
                                        },
                                        "operator": {
                                          "type": "STAR",
                                          "value": "*",
                                          "line": 2,
                                          "column": 978
                                        },
                                        "right": {
                                          "kind": "Unary",
                                          "operator": {
                                            "type": "MINUS",
                                            "value": "-",
                                            "line": 2,
                                            "column": 980
                                          },
                                          "right": {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "c",
                                                  "line": 2,
                                                  "column": 981
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "d",
                                                  "line": 2,
                                                  "column": 983
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "getFoo",
                                                  "line": 2,
                                                  "column": 985
                                                }
                                              },
                                              "args": [
                                                {
                                                  "kind": "Literal",
                                                  "value": 0
                                                },
                                                {
                                                  "kind": "Call",
                                                  "callee": {
                                                    "kind": "Member",
                                                    "object": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "n",
                                                        "line": 2,
                                                        "column": 995
                                                      }
                                                    },
                                                    "property": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "size",
                                                        "line": 2,
                                                        "column": 997
                                                      }
                                                    }
                                                  },
                                                  "args": []
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "kind": "Unary",
                                      "operator": {
                                        "type": "NOT",
                                        "value": "!",
                                        "line": 2,
                                        "column": 1007
                                      },
                                      "right": {
                                        "kind": "Group",
                                        "expression": {
                                          "kind": "Logical",
                                          "left": {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "f",
                                                  "line": 2,
                                                  "column": 1009
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "g",
                                                  "line": 2,
                                                  "column": 1011
                                                }
                                              }
                                            },
                                            "args": [
                                              {
                                                "kind": "Index",
                                                "object": {
                                                  "kind": "Member",
                                                  "object": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "a",
                                                      "line": 2,
                                                      "column": 1013
                                                    }
                                                  },
                                                  "property": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "b",
                                                      "line": 2,
                                                      "column": 1015
                                                    }
                                                  }
                                                },
                                                "index": {
                                                  "kind": "Literal",
                                                  "value": 0
                                                }
                                              }
                                            ]
                                          },
                                          "operator": {
                                            "type": "OR",
                                            "value": "||",
                                            "line": 2,
                                            "column": 1021
                                          },
                                          "right": {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "h",
                                                "line": 2,
                                                "column": 1024
                                              }
                                            },
                                            "index": {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "i",
                                                    "line": 2,
                                                    "column": 1026
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "j",
                                                    "line": 2,
                                                    "column": 1028
                                                  }
                                                }
                                              },
                                              "args": [
                                                {
                                                  "kind": "Index",
                                                  "object": {
                                                    "kind": "Member",
                                                    "object": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "k",
                                                        "line": 2,
                                                        "column": 1030
                                                      }
                                                    },
                                                    "property": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "l",
                                                        "line": 2,
                                                        "column": 1032
                                                      }
                                                    }
                                                  },
                                                  "index": {
                                                    "kind": "Literal",
                                                    "value": 0
                                                  }
                                                },
                                                {
                                                  "kind": "Call",
                                                  "callee": {
                                                    "kind": "Member",
                                                    "object": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "m",
                                                        "line": 2,
                                                        "column": 1038
                                                      }
                                                    },
                                                    "property": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "n",
                                                        "line": 2,
                                                        "column": 1040
                                                      }
                                                    }
                                                  },
                                                  "args": []
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "data",
                              "line": 2,
                              "column": 1050
                            }
                          }
                        },
                        "index": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Member",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "result",
                                  "line": 2,
                                  "column": 1055
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "index",
                                  "line": 2,
                                  "column": 1062
                                }
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "get",
                                "line": 2,
                                "column": 1068
                              }
                            }
                          },
                          "args": [
                            {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "a",
                                    "line": 2,
                                    "column": 1072
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "b",
                                    "line": 2,
                                    "column": 1074
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "getFoo",
                                    "line": 2,
                                    "column": 1076
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "x",
                                          "line": 2,
                                          "column": 1083
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "y",
                                          "line": 2,
                                          "column": 1085
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "z",
                                          "line": 2,
                                          "column": 1091
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "w",
                                          "line": 2,
                                          "column": 1093
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            },
                            {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "c",
                                    "line": 2,
                                    "column": 1100
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "d",
                                    "line": 2,
                                    "column": 1102
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getBar",
                                      "line": 2,
                                      "column": 1104
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "m",
                                            "line": 2,
                                            "column": 1111
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 1113
                                          }
                                        }
                                      },
                                      "args": []
                                    },
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "p",
                                          "line": 2,
                                          "column": 1118
                                        }
                                      },
                                      "index": {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "q",
                                              "line": 2,
                                              "column": 1120
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "r",
                                              "line": 2,
                                              "column": 1122
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      },
                      "property": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "entries",
                          "line": 2,
                          "column": 1132
                        }
                      }
                    },
                    "index": {
                      "kind": "Call",
                      "callee": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "getIdx",
                          "line": 2,
                          "column": 1140
                        }
                      },
                      "args": [
                        {
                          "kind": "Call",
                          "callee": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "n",
                                "line": 2,
                                "column": 1147
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "fetch",
                                "line": 2,
                                "column": 1149
                              }
                            }
                          },
                          "args": [
                            {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "a",
                                    "line": 2,
                                    "column": 1155
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "b",
                                    "line": 2,
                                    "column": 1157
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "compute",
                                    "line": 2,
                                    "column": 1159
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Binary",
                                    "left": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 1167
                                      }
                                    },
                                    "operator": {
                                      "type": "PLUS",
                                      "value": "+",
                                      "line": 2,
                                      "column": 1169
                                    },
                                    "right": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 1171
                                      }
                                    }
                                  },
                                  {
                                    "kind": "Unary",
                                    "operator": {
                                      "type": "MINUS",
                                      "value": "-",
                                      "line": 2,
                                      "column": 1174
                                    },
                                    "right": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "z",
                                            "line": 2,
                                            "column": 1175
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "w",
                                            "line": 2,
                                            "column": 1177
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Literal",
                                        "value": 0
                                      }
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "c",
                                    "line": 2,
                                    "column": 1185
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "d",
                                    "line": 2,
                                    "column": 1187
                                  }
                                }
                              },
                              "args": []
                            }
                          ]
                        },
                        {
                          "kind": "Index",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "m",
                                "line": 2,
                                "column": 1193
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "retrieve",
                                "line": 2,
                                "column": 1195
                              }
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "getKey",
                                "line": 2,
                                "column": 1204
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "x",
                                      "line": 2,
                                      "column": 1211
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "y",
                                      "line": 2,
                                      "column": 1213
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Literal",
                                  "value": 0
                                }
                              },
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "y",
                                      "line": 2,
                                      "column": 1219
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "z",
                                      "line": 2,
                                      "column": 1221
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getIdx",
                                      "line": 2,
                                      "column": 1223
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "a",
                                        "line": 2,
                                        "column": 1230
                                      }
                                    },
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "b",
                                            "line": 2,
                                            "column": 1233
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "c",
                                            "line": 2,
                                            "column": 1235
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "getFoo",
                                            "line": 2,
                                            "column": 1237
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "value": 0
                                          },
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "n",
                                                  "line": 2,
                                                  "column": 1247
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "size",
                                                  "line": 2,
                                                  "column": 1249
                                                }
                                              }
                                            },
                                            "args": []
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "property": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "process",
                      "line": 2,
                      "column": 1264
                    }
                  }
                },
                "args": []
              },
              "index": {
                "kind": "Call",
                "callee": {
                  "kind": "Member",
                  "object": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "offset",
                      "line": 2,
                      "column": 1274
                    }
                  },
                  "property": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "calculate",
                      "line": 2,
                      "column": 1281
                    }
                  }
                },
                "args": [
                  {
                    "kind": "Binary",
                    "left": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "base",
                        "line": 2,
                        "column": 1291
                      }
                    },
                    "operator": {
                      "type": "PLUS",
                      "value": "+",
                      "line": 2,
                      "column": 1296
                    },
                    "right": {
                      "kind": "Binary",
                      "left": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "step",
                          "line": 2,
                          "column": 1298
                        }
                      },
                      "operator": {
                        "type": "STAR",
                        "value": "*",
                        "line": 2,
                        "column": 1303
                      },
                      "right": {
                        "kind": "Unary",
                        "operator": {
                          "type": "MINUS",
                          "value": "-",
                          "line": 2,
                          "column": 1305
                        },
                        "right": {
                          "kind": "Index",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "factor",
                                "line": 2,
                                "column": 1306
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "get",
                                "line": 2,
                                "column": 1313
                              }
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "idx",
                                  "line": 2,
                                  "column": 1317
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "current",
                                  "line": 2,
                                  "column": 1321
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "a",
                                      "line": 2,
                                      "column": 1329
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "b",
                                      "line": 2,
                                      "column": 1331
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getIdx",
                                      "line": 2,
                                      "column": 1333
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Literal",
                                      "value": 0
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 1343
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "size",
                                            "line": 2,
                                            "column": 1345
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "c",
                                      "line": 2,
                                      "column": 1355
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "d",
                                      "line": 2,
                                      "column": 1357
                                    }
                                  }
                                },
                                "args": []
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            "property": {
              "kind": "Identifier",
              "name": {
                "type": "IDENTIFIER",
                "value": "result",
                "line": 2,
                "column": 1365
              }
            }
          },
          "value": {
            "kind": "Call",
            "callee": {
              "kind": "Identifier",
              "name": {
                "type": "IDENTIFIER",
                "value": "process",
                "line": 2,
                "column": 1374
              }
            },
            "args": [
              {
                "kind": "Call",
                "callee": {
                  "kind": "Member",
                  "object": {
                    "kind": "Index",
                    "object": {
                      "kind": "Index",
                      "object": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "arr",
                          "line": 2,
                          "column": 1382
                        }
                      },
                      "index": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "i",
                          "line": 2,
                          "column": 1386
                        }
                      }
                    },
                    "index": {
                      "kind": "Binary",
                      "left": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "j",
                          "line": 2,
                          "column": 1389
                        }
                      },
                      "operator": {
                        "type": "PLUS",
                        "value": "+",
                        "line": 2,
                        "column": 1391
                      },
                      "right": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Member",
                          "object": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "k",
                              "line": 2,
                              "column": 1393
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "offset",
                              "line": 2,
                              "column": 1395
                            }
                          }
                        },
                        "args": [
                          {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "x",
                                  "line": 2,
                                  "column": 1402
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "y",
                                  "line": 2,
                                  "column": 1404
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "getFoo",
                                  "line": 2,
                                  "column": 1406
                                }
                              },
                              "args": [
                                {
                                  "kind": "Literal",
                                  "value": 0
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "n",
                                        "line": 2,
                                        "column": 1416
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "size",
                                        "line": 2,
                                        "column": 1418
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            }
                          },
                          {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "z",
                                  "line": 2,
                                  "column": 1428
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "w",
                                  "line": 2,
                                  "column": 1430
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "a",
                                      "line": 2,
                                      "column": 1432
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "b",
                                      "line": 2,
                                      "column": 1434
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Literal",
                                  "value": 0
                                }
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "c",
                                      "line": 2,
                                      "column": 1440
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "d",
                                      "line": 2,
                                      "column": 1442
                                    }
                                  }
                                },
                                "args": []
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "property": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "transform",
                      "line": 2,
                      "column": 1449
                    }
                  }
                },
                "args": [
                  {
                    "kind": "Binary",
                    "left": {
                      "kind": "Binary",
                      "left": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "x",
                          "line": 2,
                          "column": 1459
                        }
                      },
                      "operator": {
                        "type": "STAR",
                        "value": "*",
                        "line": 2,
                        "column": 1461
                      },
                      "right": {
                        "kind": "Identifier",
                        "name": {
                          "type": "IDENTIFIER",
                          "value": "y",
                          "line": 2,
                          "column": 1463
                        }
                      }
                    },
                    "operator": {
                      "type": "PLUS",
                      "value": "+",
                      "line": 2,
                      "column": 1465
                    },
                    "right": {
                      "kind": "Unary",
                      "operator": {
                        "type": "MINUS",
                        "value": "-",
                        "line": 2,
                        "column": 1467
                      },
                      "right": {
                        "kind": "Index",
                        "object": {
                          "kind": "Member",
                          "object": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "z",
                              "line": 2,
                              "column": 1468
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "w",
                              "line": 2,
                              "column": 1470
                            }
                          }
                        },
                        "index": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "compute",
                              "line": 2,
                              "column": 1472
                            }
                          },
                          "args": [
                            {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "a",
                                    "line": 2,
                                    "column": 1480
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "b",
                                    "line": 2,
                                    "column": 1482
                                  }
                                }
                              },
                              "index": {
                                "kind": "Literal",
                                "value": 0
                              }
                            },
                            {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "b",
                                    "line": 2,
                                    "column": 1488
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "c",
                                    "line": 2,
                                    "column": 1490
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getIdx",
                                      "line": 2,
                                      "column": 1492
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "n",
                                        "line": 2,
                                        "column": 1499
                                      }
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "m",
                                            "line": 2,
                                            "column": 1502
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "size",
                                            "line": 2,
                                            "column": 1504
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "kind": "Unary",
                    "operator": {
                      "type": "NOT",
                      "value": "!",
                      "line": 2,
                      "column": 1516
                    },
                    "right": {
                      "kind": "Call",
                      "callee": {
                        "kind": "Member",
                        "object": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "ready",
                            "line": 2,
                            "column": 1517
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "check",
                            "line": 2,
                            "column": 1523
                          }
                        }
                      },
                      "args": [
                        {
                          "kind": "Index",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "a",
                                "line": 2,
                                "column": 1529
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "b",
                                "line": 2,
                                "column": 1531
                              }
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "getIdx",
                                "line": 2,
                                "column": 1533
                              }
                            },
                            "args": [
                              {
                                "kind": "Literal",
                                "value": 0
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "n",
                                      "line": 2,
                                      "column": 1543
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "size",
                                      "line": 2,
                                      "column": 1545
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 1550
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 1552
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "c",
                                          "line": 2,
                                          "column": 1558
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "d",
                                          "line": 2,
                                          "column": 1560
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "kind": "Call",
                          "callee": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "z",
                                "line": 2,
                                "column": 1568
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "w",
                                "line": 2,
                                "column": 1570
                              }
                            }
                          },
                          "args": []
                        }
                      ]
                    }
                  },
                  {
                    "kind": "Member",
                    "object": {
                      "kind": "Index",
                      "object": {
                        "kind": "Member",
                        "object": {
                          "kind": "Index",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "obj",
                                "line": 2,
                                "column": 1576
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "data",
                                "line": 2,
                                "column": 1580
                              }
                            }
                          },
                          "index": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "key",
                              "line": 2,
                              "column": 1585
                            }
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "entries",
                            "line": 2,
                            "column": 1590
                          }
                        }
                      },
                      "index": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "getFoo",
                            "line": 2,
                            "column": 1598
                          }
                        },
                        "args": [
                          {
                            "kind": "Literal",
                            "value": 0
                          },
                          {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "n",
                                  "line": 2,
                                  "column": 1608
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "size",
                                  "line": 2,
                                  "column": 1610
                                }
                              }
                            },
                            "args": []
                          }
                        ]
                      }
                    },
                    "property": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "status",
                        "line": 2,
                        "column": 1619
                      }
                    }
                  }
                ]
              },
              {
                "kind": "Call",
                "callee": {
                  "kind": "Member",
                  "object": {
                    "kind": "Index",
                    "object": {
                      "kind": "Call",
                      "callee": {
                        "kind": "Member",
                        "object": {
                          "kind": "Index",
                          "object": {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "cache",
                                        "line": 2,
                                        "column": 1628
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "getKey",
                                          "line": 2,
                                          "column": 1634
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 1641
                                          }
                                        },
                                        {
                                          "kind": "Index",
                                          "object": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "m",
                                                "line": 2,
                                                "column": 1644
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "vol",
                                                "line": 2,
                                                "column": 1646
                                              }
                                            }
                                          },
                                          "index": {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "getFoo",
                                                "line": 2,
                                                "column": 1650
                                              }
                                            },
                                            "args": [
                                              {
                                                "kind": "Binary",
                                                "left": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "a",
                                                    "line": 2,
                                                    "column": 1657
                                                  }
                                                },
                                                "operator": {
                                                  "type": "PLUS",
                                                  "value": "+",
                                                  "line": 2,
                                                  "column": 1659
                                                },
                                                "right": {
                                                  "kind": "Binary",
                                                  "left": {
                                                    "kind": "Identifier",
                                                    "name": {
                                                      "type": "IDENTIFIER",
                                                      "value": "b",
                                                      "line": 2,
                                                      "column": 1661
                                                    }
                                                  },
                                                  "operator": {
                                                    "type": "STAR",
                                                    "value": "*",
                                                    "line": 2,
                                                    "column": 1663
                                                  },
                                                  "right": {
                                                    "kind": "Unary",
                                                    "operator": {
                                                      "type": "MINUS",
                                                      "value": "-",
                                                      "line": 2,
                                                      "column": 1665
                                                    },
                                                    "right": {
                                                      "kind": "Index",
                                                      "object": {
                                                        "kind": "Member",
                                                        "object": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "c",
                                                            "line": 2,
                                                            "column": 1666
                                                          }
                                                        },
                                                        "property": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "d",
                                                            "line": 2,
                                                            "column": 1668
                                                          }
                                                        }
                                                      },
                                                      "index": {
                                                        "kind": "Call",
                                                        "callee": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "getIdx",
                                                            "line": 2,
                                                            "column": 1670
                                                          }
                                                        },
                                                        "args": [
                                                          {
                                                            "kind": "Literal",
                                                            "value": 0
                                                          },
                                                          {
                                                            "kind": "Call",
                                                            "callee": {
                                                              "kind": "Member",
                                                              "object": {
                                                                "kind": "Identifier",
                                                                "name": {
                                                                  "type": "IDENTIFIER",
                                                                  "value": "n",
                                                                  "line": 2,
                                                                  "column": 1680
                                                                }
                                                              },
                                                              "property": {
                                                                "kind": "Identifier",
                                                                "name": {
                                                                  "type": "IDENTIFIER",
                                                                  "value": "size",
                                                                  "line": 2,
                                                                  "column": 1682
                                                                }
                                                              }
                                                            },
                                                            "args": []
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              {
                                                "kind": "Unary",
                                                "operator": {
                                                  "type": "NOT",
                                                  "value": "!",
                                                  "line": 2,
                                                  "column": 1692
                                                },
                                                "right": {
                                                  "kind": "Group",
                                                  "expression": {
                                                    "kind": "Binary",
                                                    "left": {
                                                      "kind": "Call",
                                                      "callee": {
                                                        "kind": "Member",
                                                        "object": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "f",
                                                            "line": 2,
                                                            "column": 1694
                                                          }
                                                        },
                                                        "property": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "g",
                                                            "line": 2,
                                                            "column": 1696
                                                          }
                                                        }
                                                      },
                                                      "args": []
                                                    },
                                                    "operator": {
                                                      "type": "EQUAL",
                                                      "value": "==",
                                                      "line": 2,
                                                      "column": 1700
                                                    },
                                                    "right": {
                                                      "kind": "Index",
                                                      "object": {
                                                        "kind": "Identifier",
                                                        "name": {
                                                          "type": "IDENTIFIER",
                                                          "value": "h",
                                                          "line": 2,
                                                          "column": 1703
                                                        }
                                                      },
                                                      "index": {
                                                        "kind": "Call",
                                                        "callee": {
                                                          "kind": "Member",
                                                          "object": {
                                                            "kind": "Identifier",
                                                            "name": {
                                                              "type": "IDENTIFIER",
                                                              "value": "i",
                                                              "line": 2,
                                                              "column": 1705
                                                            }
                                                          },
                                                          "property": {
                                                            "kind": "Identifier",
                                                            "name": {
                                                              "type": "IDENTIFIER",
                                                              "value": "j",
                                                              "line": 2,
                                                              "column": 1707
                                                            }
                                                          }
                                                        },
                                                        "args": [
                                                          {
                                                            "kind": "Index",
                                                            "object": {
                                                              "kind": "Member",
                                                              "object": {
                                                                "kind": "Identifier",
                                                                "name": {
                                                                  "type": "IDENTIFIER",
                                                                  "value": "k",
                                                                  "line": 2,
                                                                  "column": 1709
                                                                }
                                                              },
                                                              "property": {
                                                                "kind": "Identifier",
                                                                "name": {
                                                                  "type": "IDENTIFIER",
                                                                  "value": "l",
                                                                  "line": 2,
                                                                  "column": 1711
                                                                }
                                                              }
                                                            },
                                                            "index": {
                                                              "kind": "Literal",
                                                              "value": 0
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "items",
                                      "line": 2,
                                      "column": 1723
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "idx",
                                        "line": 2,
                                        "column": 1729
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "get",
                                        "line": 2,
                                        "column": 1733
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "entries",
                                  "line": 2,
                                  "column": 1740
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "compute",
                                  "line": 2,
                                  "column": 1748
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 1756
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 1758
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 1764
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "z",
                                        "line": 2,
                                        "column": 1766
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                }
                              ]
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "result",
                                    "line": 2,
                                    "column": 1773
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "index",
                                    "line": 2,
                                    "column": 1780
                                  }
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "get",
                                  "line": 2,
                                  "column": 1786
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "a",
                                      "line": 2,
                                      "column": 1790
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "b",
                                      "line": 2,
                                      "column": 1792
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getFoo",
                                      "line": 2,
                                      "column": 1794
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Literal",
                                      "value": 0
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 1804
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "size",
                                            "line": 2,
                                            "column": 1806
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "c",
                                      "line": 2,
                                      "column": 1816
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "d",
                                      "line": 2,
                                      "column": 1818
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "getBar",
                                        "line": 2,
                                        "column": 1820
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "m",
                                              "line": 2,
                                              "column": 1827
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "n",
                                              "line": 2,
                                              "column": 1829
                                            }
                                          }
                                        },
                                        "args": []
                                      },
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "p",
                                            "line": 2,
                                            "column": 1834
                                          }
                                        },
                                        "index": {
                                          "kind": "Index",
                                          "object": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "q",
                                                "line": 2,
                                                "column": 1836
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "r",
                                                "line": 2,
                                                "column": 1838
                                              }
                                            }
                                          },
                                          "index": {
                                            "kind": "Literal",
                                            "value": 0
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "process",
                            "line": 2,
                            "column": 1848
                          }
                        }
                      },
                      "args": []
                    },
                    "index": {
                      "kind": "Literal",
                      "value": 0
                    }
                  },
                  "property": {
                    "kind": "Identifier",
                    "name": {
                      "type": "IDENTIFIER",
                      "value": "transform",
                      "line": 2,
                      "column": 1861
                    }
                  }
                },
                "args": [
                  {
                    "kind": "Binary",
                    "left": {
                      "kind": "Identifier",
                      "name": {
                        "type": "IDENTIFIER",
                        "value": "base",
                        "line": 2,
                        "column": 1871
                      }
                    },
                    "operator": {
                      "type": "STAR",
                      "value": "*",
                      "line": 2,
                      "column": 1876
                    },
                    "right": {
                      "kind": "Unary",
                      "operator": {
                        "type": "MINUS",
                        "value": "-",
                        "line": 2,
                        "column": 1878
                      },
                      "right": {
                        "kind": "Index",
                        "object": {
                          "kind": "Member",
                          "object": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "step",
                              "line": 2,
                              "column": 1879
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "factor",
                              "line": 2,
                              "column": 1884
                            }
                          }
                        },
                        "index": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "idx",
                                "line": 2,
                                "column": 1891
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "current",
                                "line": 2,
                                "column": 1895
                              }
                            }
                          },
                          "args": [
                            {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "a",
                                    "line": 2,
                                    "column": 1903
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "b",
                                    "line": 2,
                                    "column": 1905
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "getFoo",
                                    "line": 2,
                                    "column": 1907
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "value": 0
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "n",
                                          "line": 2,
                                          "column": 1917
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "size",
                                          "line": 2,
                                          "column": 1919
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            },
                            {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "c",
                                    "line": 2,
                                    "column": 1929
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "d",
                                    "line": 2,
                                    "column": 1931
                                  }
                                }
                              },
                              "args": []
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "kind": "Unary",
                    "operator": {
                      "type": "NOT",
                      "value": "!",
                      "line": 2,
                      "column": 1938
                    },
                    "right": {
                      "kind": "Group",
                      "expression": {
                        "kind": "Logical",
                        "left": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "x",
                                "line": 2,
                                "column": 1940
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "y",
                                "line": 2,
                                "column": 1942
                              }
                            }
                          },
                          "args": []
                        },
                        "operator": {
                          "type": "AND",
                          "value": "&&",
                          "line": 2,
                          "column": 1946
                        },
                        "right": {
                          "kind": "Binary",
                          "left": {
                            "kind": "Index",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "z",
                                "line": 2,
                                "column": 1949
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "w",
                                    "line": 2,
                                    "column": 1951
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "v",
                                    "line": 2,
                                    "column": 1953
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "a",
                                        "line": 2,
                                        "column": 1955
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "b",
                                        "line": 2,
                                        "column": 1957
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "c",
                                        "line": 2,
                                        "column": 1963
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "d",
                                        "line": 2,
                                        "column": 1965
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            }
                          },
                          "operator": {
                            "type": "EQUAL",
                            "value": "==",
                            "line": 2,
                            "column": 1971
                          },
                          "right": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "h",
                                "line": 2,
                                "column": 1974
                              }
                            },
                            "args": [
                              {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "i",
                                  "line": 2,
                                  "column": 1976
                                }
                              },
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "j",
                                      "line": 2,
                                      "column": 1979
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "k",
                                      "line": 2,
                                      "column": 1981
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "l",
                                        "line": 2,
                                        "column": 1983
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "m",
                                        "line": 2,
                                        "column": 1985
                                      }
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 1987
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "o",
                                            "line": 2,
                                            "column": 1989
                                          }
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Index",
                                          "object": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "p",
                                                "line": 2,
                                                "column": 1991
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "q",
                                                "line": 2,
                                                "column": 1993
                                              }
                                            }
                                          },
                                          "index": {
                                            "kind": "Literal",
                                            "value": 0
                                          }
                                        },
                                        {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "r",
                                                "line": 2,
                                                "column": 1999
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "s",
                                                "line": 2,
                                                "column": 2001
                                              }
                                            }
                                          },
                                          "args": []
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                ]
              },
              {
                "kind": "Unary",
                "operator": {
                  "type": "NOT",
                  "value": "!",
                  "line": 2,
                  "column": 2012
                },
                "right": {
                  "kind": "Group",
                  "expression": {
                    "kind": "Logical",
                    "left": {
                      "kind": "Logical",
                      "left": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Member",
                          "object": {
                            "kind": "Member",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "a",
                                "line": 2,
                                "column": 2014
                              }
                            },
                            "property": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "b",
                                "line": 2,
                                "column": 2016
                              }
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "c",
                              "line": 2,
                              "column": 2018
                            }
                          }
                        },
                        "args": [
                          {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "x",
                                  "line": 2,
                                  "column": 2020
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "y",
                                  "line": 2,
                                  "column": 2022
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "getIdx",
                                  "line": 2,
                                  "column": 2024
                                }
                              },
                              "args": [
                                {
                                  "kind": "Literal",
                                  "value": 0
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "n",
                                        "line": 2,
                                        "column": 2034
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "size",
                                        "line": 2,
                                        "column": 2036
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            }
                          },
                          {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "z",
                                  "line": 2,
                                  "column": 2046
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "w",
                                  "line": 2,
                                  "column": 2048
                                }
                              }
                            },
                            "args": []
                          }
                        ]
                      },
                      "operator": {
                        "type": "AND",
                        "value": "&&",
                        "line": 2,
                        "column": 2053
                      },
                      "right": {
                        "kind": "Binary",
                        "left": {
                          "kind": "Index",
                          "object": {
                            "kind": "Index",
                            "object": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "d",
                                "line": 2,
                                "column": 2056
                              }
                            },
                            "index": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "e",
                                "line": 2,
                                "column": 2058
                              }
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "f",
                                  "line": 2,
                                  "column": 2061
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "g",
                                  "line": 2,
                                  "column": 2063
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "compute",
                                    "line": 2,
                                    "column": 2065
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Binary",
                                    "left": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 2073
                                      }
                                    },
                                    "operator": {
                                      "type": "PLUS",
                                      "value": "+",
                                      "line": 2,
                                      "column": 2075
                                    },
                                    "right": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 2077
                                      }
                                    }
                                  },
                                  {
                                    "kind": "Unary",
                                    "operator": {
                                      "type": "MINUS",
                                      "value": "-",
                                      "line": 2,
                                      "column": 2080
                                    },
                                    "right": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "z",
                                            "line": 2,
                                            "column": 2081
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "w",
                                            "line": 2,
                                            "column": 2083
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "getFoo",
                                            "line": 2,
                                            "column": 2085
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Literal",
                                            "value": 0
                                          },
                                          {
                                            "kind": "Call",
                                            "callee": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "n",
                                                  "line": 2,
                                                  "column": 2095
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "size",
                                                  "line": 2,
                                                  "column": 2097
                                                }
                                              }
                                            },
                                            "args": []
                                          }
                                        ]
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        "operator": {
                          "type": "EQUAL",
                          "value": "==",
                          "line": 2,
                          "column": 2109
                        },
                        "right": {
                          "kind": "Call",
                          "callee": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "h",
                              "line": 2,
                              "column": 2112
                            }
                          },
                          "args": [
                            {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "i",
                                "line": 2,
                                "column": 2114
                              }
                            },
                            {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "j",
                                    "line": 2,
                                    "column": 2117
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "k",
                                    "line": 2,
                                    "column": 2119
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "l",
                                    "line": 2,
                                    "column": 2121
                                  }
                                },
                                "args": []
                              }
                            }
                          ]
                        }
                      }
                    },
                    "operator": {
                      "type": "OR",
                      "value": "||",
                      "line": 2,
                      "column": 2127
                    },
                    "right": {
                      "kind": "Unary",
                      "operator": {
                        "type": "NOT",
                        "value": "!",
                        "line": 2,
                        "column": 2130
                      },
                      "right": {
                        "kind": "Group",
                        "expression": {
                          "kind": "Logical",
                          "left": {
                            "kind": "Binary",
                            "left": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "m",
                                        "line": 2,
                                        "column": 2132
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "n",
                                        "line": 2,
                                        "column": 2134
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "getIdx",
                                        "line": 2,
                                        "column": 2136
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "a",
                                              "line": 2,
                                              "column": 2143
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "b",
                                              "line": 2,
                                              "column": 2145
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "b",
                                              "line": 2,
                                              "column": 2151
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "c",
                                              "line": 2,
                                              "column": 2153
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "getFoo",
                                              "line": 2,
                                              "column": 2155
                                            }
                                          },
                                          "args": [
                                            {
                                              "kind": "Literal",
                                              "value": 0
                                            },
                                            {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "n",
                                                    "line": 2,
                                                    "column": 2165
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "size",
                                                    "line": 2,
                                                    "column": 2167
                                                  }
                                                }
                                              },
                                              "args": []
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "process",
                                    "line": 2,
                                    "column": 2178
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 2186
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 2188
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "z",
                                        "line": 2,
                                        "column": 2194
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "w",
                                        "line": 2,
                                        "column": 2196
                                      }
                                    }
                                  },
                                  "args": []
                                }
                              ]
                            },
                            "operator": {
                              "type": "EQUAL",
                              "value": "==",
                              "line": 2,
                              "column": 2201
                            },
                            "right": {
                              "kind": "Member",
                              "object": {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "cache",
                                        "line": 2,
                                        "column": 2204
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "getKey",
                                          "line": 2,
                                          "column": 2210
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 2217
                                          }
                                        },
                                        {
                                          "kind": "Index",
                                          "object": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "m",
                                                "line": 2,
                                                "column": 2220
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "vol",
                                                "line": 2,
                                                "column": 2222
                                              }
                                            }
                                          },
                                          "index": {
                                            "kind": "Literal",
                                            "value": 0
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "items",
                                      "line": 2,
                                      "column": 2231
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getFoo",
                                      "line": 2,
                                      "column": 2237
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Literal",
                                      "value": 0
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 2247
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "size",
                                            "line": 2,
                                            "column": 2249
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "status",
                                  "line": 2,
                                  "column": 2258
                                }
                              }
                            }
                          },
                          "operator": {
                            "type": "AND",
                            "value": "&&",
                            "line": 2,
                            "column": 2265
                          },
                          "right": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "ready",
                                  "line": 2,
                                  "column": 2268
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "check",
                                  "line": 2,
                                  "column": 2274
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "x",
                                      "line": 2,
                                      "column": 2280
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "y",
                                      "line": 2,
                                      "column": 2282
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "compute",
                                      "line": 2,
                                      "column": 2284
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Binary",
                                      "left": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 2292
                                        }
                                      },
                                      "operator": {
                                        "type": "PLUS",
                                        "value": "+",
                                        "line": 2,
                                        "column": 2294
                                      },
                                      "right": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 2296
                                        }
                                      }
                                    },
                                    {
                                      "kind": "Unary",
                                      "operator": {
                                        "type": "MINUS",
                                        "value": "-",
                                        "line": 2,
                                        "column": 2299
                                      },
                                      "right": {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "c",
                                              "line": 2,
                                              "column": 2300
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "d",
                                              "line": 2,
                                              "column": 2302
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "z",
                                      "line": 2,
                                      "column": 2310
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "w",
                                      "line": 2,
                                      "column": 2312
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 2314
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 2316
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "getIdx",
                                          "line": 2,
                                          "column": 2318
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Literal",
                                          "value": 0
                                        },
                                        {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "n",
                                                "line": 2,
                                                "column": 2328
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "size",
                                                "line": 2,
                                                "column": 2330
                                              }
                                            }
                                          },
                                          "args": []
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "c",
                                          "line": 2,
                                          "column": 2340
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "d",
                                          "line": 2,
                                          "column": 2342
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              },
              {
                "kind": "Call",
                "callee": {
                  "kind": "Identifier",
                  "name": {
                    "type": "IDENTIFIER",
                    "value": "compute",
                    "line": 2,
                    "column": 2351
                  }
                },
                "args": [
                  {
                    "kind": "Binary",
                    "left": {
                      "kind": "Call",
                      "callee": {
                        "kind": "Member",
                        "object": {
                          "kind": "Index",
                          "object": {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "a",
                                  "line": 2,
                                  "column": 2359
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "b",
                                  "line": 2,
                                  "column": 2361
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "getFoo",
                                  "line": 2,
                                  "column": 2363
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 2370
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 2372
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "z",
                                        "line": 2,
                                        "column": 2378
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "w",
                                        "line": 2,
                                        "column": 2380
                                      }
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "a",
                                            "line": 2,
                                            "column": 2382
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "b",
                                            "line": 2,
                                            "column": 2384
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Literal",
                                        "value": 0
                                      }
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "c",
                                            "line": 2,
                                            "column": 2390
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "d",
                                            "line": 2,
                                            "column": 2392
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          "index": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "getIdx",
                                "line": 2,
                                "column": 2399
                              }
                            },
                            "args": [
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "n",
                                      "line": 2,
                                      "column": 2406
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "fetch",
                                      "line": 2,
                                      "column": 2408
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "a",
                                          "line": 2,
                                          "column": 2414
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "b",
                                          "line": 2,
                                          "column": 2416
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "c",
                                          "line": 2,
                                          "column": 2422
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "d",
                                          "line": 2,
                                          "column": 2424
                                        }
                                      }
                                    },
                                    "args": []
                                  }
                                ]
                              },
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "m",
                                      "line": 2,
                                      "column": 2430
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "retrieve",
                                      "line": 2,
                                      "column": 2432
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "getKey",
                                      "line": 2,
                                      "column": 2441
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 2448
                                      }
                                    },
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "y",
                                            "line": 2,
                                            "column": 2451
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "z",
                                            "line": 2,
                                            "column": 2453
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Literal",
                                        "value": 0
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        "property": {
                          "kind": "Identifier",
                          "name": {
                            "type": "IDENTIFIER",
                            "value": "process",
                            "line": 2,
                            "column": 2462
                          }
                        }
                      },
                      "args": [
                        {
                          "kind": "Binary",
                          "left": {
                            "kind": "Binary",
                            "left": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "x",
                                "line": 2,
                                "column": 2470
                              }
                            },
                            "operator": {
                              "type": "STAR",
                              "value": "*",
                              "line": 2,
                              "column": 2472
                            },
                            "right": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "y",
                                "line": 2,
                                "column": 2474
                              }
                            }
                          },
                          "operator": {
                            "type": "PLUS",
                            "value": "+",
                            "line": 2,
                            "column": 2476
                          },
                          "right": {
                            "kind": "Unary",
                            "operator": {
                              "type": "MINUS",
                              "value": "-",
                              "line": 2,
                              "column": 2478
                            },
                            "right": {
                              "kind": "Index",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "z",
                                    "line": 2,
                                    "column": 2479
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "w",
                                    "line": 2,
                                    "column": 2481
                                  }
                                }
                              },
                              "index": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "compute",
                                    "line": 2,
                                    "column": 2483
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "a",
                                      "line": 2,
                                      "column": 2491
                                    }
                                  },
                                  {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "b",
                                      "line": 2,
                                      "column": 2494
                                    }
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "kind": "Unary",
                          "operator": {
                            "type": "NOT",
                            "value": "!",
                            "line": 2,
                            "column": 2499
                          },
                          "right": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "ready",
                                  "line": 2,
                                  "column": 2500
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "check",
                                  "line": 2,
                                  "column": 2506
                                }
                              }
                            },
                            "args": [
                              {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "a",
                                      "line": 2,
                                      "column": 2512
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "b",
                                      "line": 2,
                                      "column": 2514
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Literal",
                                  "value": 0
                                }
                              },
                              {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "z",
                                      "line": 2,
                                      "column": 2520
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "w",
                                      "line": 2,
                                      "column": 2522
                                    }
                                  }
                                },
                                "args": []
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "operator": {
                      "type": "PLUS",
                      "value": "+",
                      "line": 2,
                      "column": 2528
                    },
                    "right": {
                      "kind": "Unary",
                      "operator": {
                        "type": "MINUS",
                        "value": "-",
                        "line": 2,
                        "column": 2530
                      },
                      "right": {
                        "kind": "Call",
                        "callee": {
                          "kind": "Member",
                          "object": {
                            "kind": "Index",
                            "object": {
                              "kind": "Member",
                              "object": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "b",
                                  "line": 2,
                                  "column": 2531
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "c",
                                  "line": 2,
                                  "column": 2533
                                }
                              }
                            },
                            "index": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "getIdx",
                                  "line": 2,
                                  "column": 2535
                                }
                              },
                              "args": [
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "n",
                                        "line": 2,
                                        "column": 2542
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "fetch",
                                        "line": 2,
                                        "column": 2544
                                      }
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "a",
                                            "line": 2,
                                            "column": 2550
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "b",
                                            "line": 2,
                                            "column": 2552
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "compute",
                                            "line": 2,
                                            "column": 2554
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "x",
                                              "line": 2,
                                              "column": 2562
                                            }
                                          },
                                          {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "y",
                                              "line": 2,
                                              "column": 2565
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "c",
                                            "line": 2,
                                            "column": 2570
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "d",
                                            "line": 2,
                                            "column": 2572
                                          }
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "getFoo",
                                              "line": 2,
                                              "column": 2574
                                            }
                                          },
                                          "args": [
                                            {
                                              "kind": "Literal",
                                              "value": 0
                                            },
                                            {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "n",
                                                    "line": 2,
                                                    "column": 2584
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "size",
                                                    "line": 2,
                                                    "column": 2586
                                                  }
                                                }
                                              },
                                              "args": []
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "m",
                                        "line": 2,
                                        "column": 2597
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "retrieve",
                                        "line": 2,
                                        "column": 2599
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "getKey",
                                        "line": 2,
                                        "column": 2608
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "x",
                                              "line": 2,
                                              "column": 2615
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "y",
                                              "line": 2,
                                              "column": 2617
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "y",
                                              "line": 2,
                                              "column": 2623
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "z",
                                              "line": 2,
                                              "column": 2625
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "getIdx",
                                              "line": 2,
                                              "column": 2627
                                            }
                                          },
                                          "args": [
                                            {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "a",
                                                "line": 2,
                                                "column": 2634
                                              }
                                            },
                                            {
                                              "kind": "Index",
                                              "object": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "b",
                                                    "line": 2,
                                                    "column": 2637
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "c",
                                                    "line": 2,
                                                    "column": 2639
                                                  }
                                                }
                                              },
                                              "index": {
                                                "kind": "Literal",
                                                "value": 0
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          },
                          "property": {
                            "kind": "Identifier",
                            "name": {
                              "type": "IDENTIFIER",
                              "value": "transform",
                              "line": 2,
                              "column": 2650
                            }
                          }
                        },
                        "args": [
                          {
                            "kind": "Binary",
                            "left": {
                              "kind": "Identifier",
                              "name": {
                                "type": "IDENTIFIER",
                                "value": "base",
                                "line": 2,
                                "column": 2660
                              }
                            },
                            "operator": {
                              "type": "STAR",
                              "value": "*",
                              "line": 2,
                              "column": 2665
                            },
                            "right": {
                              "kind": "Unary",
                              "operator": {
                                "type": "MINUS",
                                "value": "-",
                                "line": 2,
                                "column": 2667
                              },
                              "right": {
                                "kind": "Index",
                                "object": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "step",
                                      "line": 2,
                                      "column": 2668
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "factor",
                                      "line": 2,
                                      "column": 2673
                                    }
                                  }
                                },
                                "index": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "idx",
                                        "line": 2,
                                        "column": 2680
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "current",
                                        "line": 2,
                                        "column": 2684
                                      }
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "a",
                                            "line": 2,
                                            "column": 2692
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "b",
                                            "line": 2,
                                            "column": 2694
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Literal",
                                        "value": 0
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          },
                          {
                            "kind": "Unary",
                            "operator": {
                              "type": "NOT",
                              "value": "!",
                              "line": 2,
                              "column": 2702
                            },
                            "right": {
                              "kind": "Group",
                              "expression": {
                                "kind": "Logical",
                                "left": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "x",
                                        "line": 2,
                                        "column": 2704
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "y",
                                        "line": 2,
                                        "column": 2706
                                      }
                                    }
                                  },
                                  "args": []
                                },
                                "operator": {
                                  "type": "AND",
                                  "value": "&&",
                                  "line": 2,
                                  "column": 2710
                                },
                                "right": {
                                  "kind": "Binary",
                                  "left": {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "z",
                                        "line": 2,
                                        "column": 2713
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "w",
                                            "line": 2,
                                            "column": 2715
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "v",
                                            "line": 2,
                                            "column": 2717
                                          }
                                        }
                                      },
                                      "args": []
                                    }
                                  },
                                  "operator": {
                                    "type": "EQUAL",
                                    "value": "==",
                                    "line": 2,
                                    "column": 2722
                                  },
                                  "right": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "h",
                                        "line": 2,
                                        "column": 2725
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "i",
                                          "line": 2,
                                          "column": 2727
                                        }
                                      },
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "j",
                                              "line": 2,
                                              "column": 2730
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "k",
                                              "line": 2,
                                              "column": 2732
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "l",
                                                "line": 2,
                                                "column": 2734
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "m",
                                                "line": 2,
                                                "column": 2736
                                              }
                                            }
                                          },
                                          "args": [
                                            {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "n",
                                                    "line": 2,
                                                    "column": 2738
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "o",
                                                    "line": 2,
                                                    "column": 2740
                                                  }
                                                }
                                              },
                                              "args": []
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "kind": "Unary",
                    "operator": {
                      "type": "NOT",
                      "value": "!",
                      "line": 2,
                      "column": 2750
                    },
                    "right": {
                      "kind": "Group",
                      "expression": {
                        "kind": "Logical",
                        "left": {
                          "kind": "Logical",
                          "left": {
                            "kind": "Call",
                            "callee": {
                              "kind": "Member",
                              "object": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "a",
                                    "line": 2,
                                    "column": 2752
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "b",
                                    "line": 2,
                                    "column": 2754
                                  }
                                }
                              },
                              "property": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "c",
                                  "line": 2,
                                  "column": 2756
                                }
                              }
                            },
                            "args": []
                          },
                          "operator": {
                            "type": "AND",
                            "value": "&&",
                            "line": 2,
                            "column": 2760
                          },
                          "right": {
                            "kind": "Binary",
                            "left": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Member",
                                "object": {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "d",
                                      "line": 2,
                                      "column": 2763
                                    }
                                  },
                                  "index": {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "e",
                                          "line": 2,
                                          "column": 2765
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "f",
                                          "line": 2,
                                          "column": 2767
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "getIdx",
                                          "line": 2,
                                          "column": 2769
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Literal",
                                          "value": 0
                                        },
                                        {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Member",
                                            "object": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "n",
                                                "line": 2,
                                                "column": 2779
                                              }
                                            },
                                            "property": {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "size",
                                                "line": 2,
                                                "column": 2781
                                              }
                                            }
                                          },
                                          "args": []
                                        }
                                      ]
                                    }
                                  }
                                },
                                "property": {
                                  "kind": "Identifier",
                                  "name": {
                                    "type": "IDENTIFIER",
                                    "value": "g",
                                    "line": 2,
                                    "column": 2791
                                  }
                                }
                              },
                              "args": [
                                {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "compute",
                                      "line": 2,
                                      "column": 2793
                                    }
                                  },
                                  "args": [
                                    {
                                      "kind": "Binary",
                                      "left": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "x",
                                          "line": 2,
                                          "column": 2801
                                        }
                                      },
                                      "operator": {
                                        "type": "PLUS",
                                        "value": "+",
                                        "line": 2,
                                        "column": 2803
                                      },
                                      "right": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "y",
                                          "line": 2,
                                          "column": 2805
                                        }
                                      }
                                    },
                                    {
                                      "kind": "Unary",
                                      "operator": {
                                        "type": "MINUS",
                                        "value": "-",
                                        "line": 2,
                                        "column": 2808
                                      },
                                      "right": {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "z",
                                              "line": 2,
                                              "column": 2809
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "w",
                                              "line": 2,
                                              "column": 2811
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            "operator": {
                              "type": "EQUAL",
                              "value": "==",
                              "line": 2,
                              "column": 2818
                            },
                            "right": {
                              "kind": "Call",
                              "callee": {
                                "kind": "Identifier",
                                "name": {
                                  "type": "IDENTIFIER",
                                  "value": "h",
                                  "line": 2,
                                  "column": 2821
                                }
                              },
                              "args": [
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "i",
                                        "line": 2,
                                        "column": 2823
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "j",
                                        "line": 2,
                                        "column": 2825
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Literal",
                                    "value": 0
                                  }
                                },
                                {
                                  "kind": "Index",
                                  "object": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "k",
                                        "line": 2,
                                        "column": 2831
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "l",
                                        "line": 2,
                                        "column": 2833
                                      }
                                    }
                                  },
                                  "index": {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "m",
                                          "line": 2,
                                          "column": 2835
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "n",
                                          "line": 2,
                                          "column": 2837
                                        }
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "n",
                                              "line": 2,
                                              "column": 2839
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "o",
                                              "line": 2,
                                              "column": 2841
                                            }
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "p",
                                                  "line": 2,
                                                  "column": 2843
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "q",
                                                  "line": 2,
                                                  "column": 2845
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Literal",
                                              "value": 0
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "operator": {
                          "type": "OR",
                          "value": "||",
                          "line": 2,
                          "column": 2854
                        },
                        "right": {
                          "kind": "Unary",
                          "operator": {
                            "type": "NOT",
                            "value": "!",
                            "line": 2,
                            "column": 2857
                          },
                          "right": {
                            "kind": "Group",
                            "expression": {
                              "kind": "Logical",
                              "left": {
                                "kind": "Binary",
                                "left": {
                                  "kind": "Call",
                                  "callee": {
                                    "kind": "Member",
                                    "object": {
                                      "kind": "Index",
                                      "object": {
                                        "kind": "Member",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "m",
                                            "line": 2,
                                            "column": 2859
                                          }
                                        },
                                        "property": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "n",
                                            "line": 2,
                                            "column": 2861
                                          }
                                        }
                                      },
                                      "index": {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "getIdx",
                                            "line": 2,
                                            "column": 2863
                                          }
                                        },
                                        "args": [
                                          {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "a",
                                              "line": 2,
                                              "column": 2870
                                            }
                                          },
                                          {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "b",
                                                  "line": 2,
                                                  "column": 2873
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "c",
                                                  "line": 2,
                                                  "column": 2875
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "getFoo",
                                                  "line": 2,
                                                  "column": 2877
                                                }
                                              },
                                              "args": [
                                                {
                                                  "kind": "Literal",
                                                  "value": 0
                                                },
                                                {
                                                  "kind": "Call",
                                                  "callee": {
                                                    "kind": "Member",
                                                    "object": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "n",
                                                        "line": 2,
                                                        "column": 2887
                                                      }
                                                    },
                                                    "property": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "size",
                                                        "line": 2,
                                                        "column": 2889
                                                      }
                                                    }
                                                  },
                                                  "args": []
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "property": {
                                      "kind": "Identifier",
                                      "name": {
                                        "type": "IDENTIFIER",
                                        "value": "process",
                                        "line": 2,
                                        "column": 2900
                                      }
                                    }
                                  },
                                  "args": []
                                },
                                "operator": {
                                  "type": "EQUAL",
                                  "value": "==",
                                  "line": 2,
                                  "column": 2910
                                },
                                "right": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Identifier",
                                          "name": {
                                            "type": "IDENTIFIER",
                                            "value": "cache",
                                            "line": 2,
                                            "column": 2913
                                          }
                                        },
                                        "index": {
                                          "kind": "Call",
                                          "callee": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "getKey",
                                              "line": 2,
                                              "column": 2919
                                            }
                                          },
                                          "args": [
                                            {
                                              "kind": "Identifier",
                                              "name": {
                                                "type": "IDENTIFIER",
                                                "value": "n",
                                                "line": 2,
                                                "column": 2926
                                              }
                                            },
                                            {
                                              "kind": "Index",
                                              "object": {
                                                "kind": "Member",
                                                "object": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "m",
                                                    "line": 2,
                                                    "column": 2929
                                                  }
                                                },
                                                "property": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "vol",
                                                    "line": 2,
                                                    "column": 2931
                                                  }
                                                }
                                              },
                                              "index": {
                                                "kind": "Call",
                                                "callee": {
                                                  "kind": "Identifier",
                                                  "name": {
                                                    "type": "IDENTIFIER",
                                                    "value": "getFoo",
                                                    "line": 2,
                                                    "column": 2935
                                                  }
                                                },
                                                "args": [
                                                  {
                                                    "kind": "Binary",
                                                    "left": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "a",
                                                        "line": 2,
                                                        "column": 2942
                                                      }
                                                    },
                                                    "operator": {
                                                      "type": "PLUS",
                                                      "value": "+",
                                                      "line": 2,
                                                      "column": 2944
                                                    },
                                                    "right": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "b",
                                                        "line": 2,
                                                        "column": 2946
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "kind": "Unary",
                                                    "operator": {
                                                      "type": "MINUS",
                                                      "value": "-",
                                                      "line": 2,
                                                      "column": 2949
                                                    },
                                                    "right": {
                                                      "kind": "Index",
                                                      "object": {
                                                        "kind": "Member",
                                                        "object": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "c",
                                                            "line": 2,
                                                            "column": 2950
                                                          }
                                                        },
                                                        "property": {
                                                          "kind": "Identifier",
                                                          "name": {
                                                            "type": "IDENTIFIER",
                                                            "value": "d",
                                                            "line": 2,
                                                            "column": 2952
                                                          }
                                                        }
                                                      },
                                                      "index": {
                                                        "kind": "Literal",
                                                        "value": 0
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "items",
                                          "line": 2,
                                          "column": 2961
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Literal",
                                      "value": 0
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "status",
                                      "line": 2,
                                      "column": 2970
                                    }
                                  }
                                }
                              },
                              "operator": {
                                "type": "AND",
                                "value": "&&",
                                "line": 2,
                                "column": 2977
                              },
                              "right": {
                                "kind": "Call",
                                "callee": {
                                  "kind": "Member",
                                  "object": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "ready",
                                      "line": 2,
                                      "column": 2980
                                    }
                                  },
                                  "property": {
                                    "kind": "Identifier",
                                    "name": {
                                      "type": "IDENTIFIER",
                                      "value": "check",
                                      "line": 2,
                                      "column": 2986
                                    }
                                  }
                                },
                                "args": [
                                  {
                                    "kind": "Index",
                                    "object": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "x",
                                          "line": 2,
                                          "column": 2992
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "y",
                                          "line": 2,
                                          "column": 2994
                                        }
                                      }
                                    },
                                    "index": {
                                      "kind": "Call",
                                      "callee": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "compute",
                                          "line": 2,
                                          "column": 2996
                                        }
                                      },
                                      "args": [
                                        {
                                          "kind": "Binary",
                                          "left": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "a",
                                              "line": 2,
                                              "column": 3004
                                            }
                                          },
                                          "operator": {
                                            "type": "PLUS",
                                            "value": "+",
                                            "line": 2,
                                            "column": 3006
                                          },
                                          "right": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "b",
                                              "line": 2,
                                              "column": 3008
                                            }
                                          }
                                        },
                                        {
                                          "kind": "Unary",
                                          "operator": {
                                            "type": "MINUS",
                                            "value": "-",
                                            "line": 2,
                                            "column": 3011
                                          },
                                          "right": {
                                            "kind": "Index",
                                            "object": {
                                              "kind": "Member",
                                              "object": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "c",
                                                  "line": 2,
                                                  "column": 3012
                                                }
                                              },
                                              "property": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "d",
                                                  "line": 2,
                                                  "column": 3014
                                                }
                                              }
                                            },
                                            "index": {
                                              "kind": "Call",
                                              "callee": {
                                                "kind": "Identifier",
                                                "name": {
                                                  "type": "IDENTIFIER",
                                                  "value": "getIdx",
                                                  "line": 2,
                                                  "column": 3016
                                                }
                                              },
                                              "args": [
                                                {
                                                  "kind": "Literal",
                                                  "value": 0
                                                },
                                                {
                                                  "kind": "Call",
                                                  "callee": {
                                                    "kind": "Member",
                                                    "object": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "n",
                                                        "line": 2,
                                                        "column": 3026
                                                      }
                                                    },
                                                    "property": {
                                                      "kind": "Identifier",
                                                      "name": {
                                                        "type": "IDENTIFIER",
                                                        "value": "size",
                                                        "line": 2,
                                                        "column": 3028
                                                      }
                                                    }
                                                  },
                                                  "args": []
                                                }
                                              ]
                                            }
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "kind": "Call",
                                    "callee": {
                                      "kind": "Member",
                                      "object": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "z",
                                          "line": 2,
                                          "column": 3040
                                        }
                                      },
                                      "property": {
                                        "kind": "Identifier",
                                        "name": {
                                          "type": "IDENTIFIER",
                                          "value": "w",
                                          "line": 2,
                                          "column": 3042
                                        }
                                      }
                                    },
                                    "args": [
                                      {
                                        "kind": "Index",
                                        "object": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "a",
                                              "line": 2,
                                              "column": 3044
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "b",
                                              "line": 2,
                                              "column": 3046
                                            }
                                          }
                                        },
                                        "index": {
                                          "kind": "Literal",
                                          "value": 0
                                        }
                                      },
                                      {
                                        "kind": "Call",
                                        "callee": {
                                          "kind": "Member",
                                          "object": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "c",
                                              "line": 2,
                                              "column": 3052
                                            }
                                          },
                                          "property": {
                                            "kind": "Identifier",
                                            "name": {
                                              "type": "IDENTIFIER",
                                              "value": "d",
                                              "line": 2,
                                              "column": 3054
                                            }
                                          }
                                        },
                                        "args": []
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      }
    }
  ]
}
