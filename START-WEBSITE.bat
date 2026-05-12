@echo off
cd /d "%~dp0"
echo Starting ThaiHub website...
echo.
start "ThaiHub Server" "%~dp0RUN-SERVER.bat"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173"
echo If the browser did not open, copy this link:
echo http://127.0.0.1:4173
echo.
echo Keep the "ThaiHub Server" window open while using the site.
pause
