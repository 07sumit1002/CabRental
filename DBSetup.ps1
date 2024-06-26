
# Check if python/python3 is installed
if (!(Get-Command python3 -ErrorAction SilentlyContinue)) {
    Write-Host "Python3 is not installed."
    exit 1
}
else {
    if (!(python --version 2>&1 | Out-Null)) {
        python3 --version
    }
    else {
        python --version
    }
}


# Check if pip/pip3 is installed
$pipInstalled = $false
$pip3Installed = $false

if (Get-Command pip -ErrorAction SilentlyContinue) {
    pip --version
    $pipInstalled = $true
    Write-Host ""
}
else {
    $pipInstalled = $false
}

if (Get-Command pip3 -ErrorAction SilentlyContinue) {
    pip3 --version
    $pip3Installed = $true
    Write-Host ""
}
else {
    $pip3Installed = $false
}

if (!($pipInstalled -or $pip3Installed)) {
    Write-Host "Neither pip nor pip3 is installed. Please install pip or pip3."   -ForegroundColor Red
    exit 1
}


# Move to Setup Directory
Set-Location -Path .\DBSetup


# Install modules using pip
if (pip install -r .\requirements.txt) {
    Write-Host "`nRequired Modules Installed Success Fully...`n"  -ForegroundColor Green
    sleep 2
}
else {
    Write-Host "`nFailed to install modules.`n"   -ForegroundColor Red
    sleep 2
}


# Try running python script
& python ./setup.py
if ($LASTEXITCODE -eq 0) {
    Write-Host "Setup Script Successfully Exited with 0 errors.`n"   -ForegroundColor Green
} else {
    Write-Host "Python script failed." -ForegroundColor Red
}


Set-Location -Path ..   
sleep 3


