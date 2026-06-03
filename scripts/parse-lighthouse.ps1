$json = Get-Content 'localhost_3000-20260603T152356.json' -Raw | ConvertFrom-Json

Write-Host "=== CATEGORY SCORES ==="
foreach($cat in $json.categories.PSObject.Properties) {
    Write-Host "$($cat.Name): Score=$($cat.Value.score)"
}

Write-Host "`n=== FAILING/LOW SCORE AUDITS (score < 0.9) ==="
foreach($audit in $json.audits.PSObject.Properties) {
    $a = $audit.Value
    if ($a.score -ne $null -and $a.score -lt 0.9 -and $a.scoreDisplayMode -ne "notApplicable" -and $a.scoreDisplayMode -ne "informative" -and $a.scoreDisplayMode -ne "manual") {
        Write-Host "[$($a.score)] $($a.id): $($a.title)"
        if ($a.displayValue) {
            Write-Host "    Display: $($a.displayValue)"
        }
        if ($a.details -and $a.details.items) {
            foreach($item in $a.details.items[0..4]) {
                if ($item.node) {
                    Write-Host "    Node: $($item.node.selector) - $($item.node.snippet)"
                }
                if ($item.url) {
                    Write-Host "    URL: $($item.url)"
                }
                if ($item.label) {
                    Write-Host "    Label: $($item.label)"
                }
                if ($item.element) {
                    Write-Host "    Element: $($item.element.snippet)"
                }
                if ($item.source) {
                    if ($item.source.snippet) {
                        Write-Host "    Source: $($item.source.snippet)"
                    }
                }
                if ($item.groupLabel) {
                    Write-Host "    Group: $($item.groupLabel)"
                }
                if ($item.description) {
                    Write-Host "    Desc: $($item.description)"
                }
            }
        }
    }
}
