@echo off
cd /d "%~dp0"
set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" set "NODE_EXE=C:\Users\mhmdr\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
echo ThaiHub server is starting...
echo.
"%NODE_EXE%" server.js
echo.
echo Server stopped. Press any key to close this window.
pause >nul
