import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Trivy() {
  return (
    <TutorialLayout
      title="trivy"
      subtitle="कंटेनर और IaC सिक्योरिटी स्कैनर — Docker, Kubernetes, Terraform, SBOM"
      icon="🐳"
      prev={{ to: '/tool/ffuf', label: 'ffuf' }}
      next={{ to: '/tool/naabu', label: 'naabu' }}
    >
      <h2>What is Trivy?</h2>
      <p>
        Trivy एक comprehensive सिक्योरिटी स्कैनर है जो container images, Kubernetes clusters, Terraform configurations, filesystems, Git repositories, और बहुत कुछ scan कर सकता है। यह vulnerabilities, misconfigurations, secrets, malware, और license issues ढूंढता है। Aqua Security ने इसे बनाया है और यह DevSecOps का एक essential tool बन गया है।
      </p>
      <p>
        Trivy की सबसे बड़ी खासियत इसकी simplicity और speed है। बस एक command चलाओ और सारी vulnerabilities सामने आ जाती हैं। कोई complex configuration नहीं, कोई daemon नहीं — बस install करो और scan करो। यह Go में लिखा गया है इसलिए cross-platform है — Linux, macOS, Windows सब पर चलता है। CI/CD pipeline में integrate करना बहुत आसान है — push से पहले vulnerabilities catch हो जाती हैं।
      </p>
      <p>
        Trivy 2019 में Aqua Security ने release किया था। यह open source है और GitHub पर 22,000+ stars हैं। Container security, IaC security, और SBOM generation में यह industry standard बन गया है। CNCF (Cloud Native Computing Foundation) का graduated project है — यानी production-ready और enterprise-grade।
      </p>
      <p>
        Trivy का philosophy है "shift-left security" — यानी development के earliest stage में ही security issues पकड़ो। Traditional approach में production में vulnerabilities पता चलती थीं — Trivy CI/CD में integrate होकर commit time पर ही alert कर देता है। इससे developers को तुरंत feedback मिलता है और वो issues fix कर सकते हैं before code production में जाए।
      </p>
      <p>
        Trivy single binary है — कोई runtime dependency नहीं, कोई database setup नहीं। Vulnerability database automatically download होती है और update होती रहती है। यह NVD, OS vendor advisories, और language-specific databases से vulnerability data collect करता है। 300,000+ known vulnerabilities cover होती हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Trivy केवल अपने systems और authorized targets पर ही use करें। बिना अनुमति के दूसरे के infrastructure को scan करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत scanning अपराध हो सकता है।
      </div>

      <h2>History of Trivy</h2>
      <p>
        Trivy की शुरुआत 2019 में Aqua Security की engineering team ने की थी। Aqua Security Israel-based cloud security company है जो container और Kubernetes security पर focus करती है। उन्होंने देखा कि existing container scanners बहुत slow और complex थे — इसलिए उन्होंने Trivy बनाया जो fast, simple, और accurate हो।
      </p>
      <p>
        2020 में Trivy CNCF Sandbox project बना। 2021 में CNCF Incubating status मिला। 2022 में Trivy 2.0 release हुआ जिसमें misconfiguration scanning, secret scanning, और SBOM generation add हुआ। 2023 में CNCF Graduated status मिला — यह container security category में पहला graduated project है।
      </p>
      <p>
        आज Trivy GitHub पर 22,000+ stars के साथ सबसे popular open source container scanner है। इसे Docker, GitLab, GitHub, AWS, Azure, और Google Cloud सब integrate करते हैं। Aqua Security इसके ऊपर enterprise version भी offer करता है जिसमें additional features जैसे malware scanning, real-time monitoring, और compliance reporting हैं।
      </p>

      <h2>How Trivy Works?</h2>
      <p>
        Trivy multiple scanners use करता है जो different security aspects cover करते हैं:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Vulnerability Scanner:</strong> OS packages, language dependencies, और known CVEs ढूंढता है। Alpine, Debian, Ubuntu, RHEL, Amazon Linux सब support करता है। Python, Node.js, Go, Java, Ruby, .NET — 20+ languages के dependency files parse करता है</li>
        <li><strong className="text-white">Misconfiguration Scanner:</strong> IaC files (Terraform, CloudFormation, Dockerfile, Kubernetes manifests) में security misconfigurations ढूंढता है। CIS benchmarks, AWS best practices, और custom policies check करता है</li>
        <li><strong className="text-white">Secret Scanner:</strong> API keys, passwords, tokens, certificates जैसे sensitive data ढूंढता है जो accidentally code में commit हो गए हैं। AWS keys, GitHub tokens, Slack webhooks — 150+ secret patterns detect करता है</li>
        <li><strong className="text-white">License Scanner:</strong> Open source licenses check करता है compliance के लिए। GPL, MIT, Apache — सब identify करता है और policy violations flag करता है</li>
        <li><strong className="text-white">SBOM Generator:</strong> Software Bill of Materials generate करता है — CycloneDX और SPDX formats support। Supply chain security के लिए essential</li>
        <li><strong className="text-white">Malware Scanner:</strong> Container images में malware detect करता है। Coin miners, backdoors, trojans — सब ढूंढता है</li>
        <li><strong className="text-white">Vulnerability Database:</strong> NVD, OS vendor advisories, GitHub Security Advisories, language-specific databases से data collect करता है। Daily update होती है</li>
        <li><strong className="text-white">Multi-Platform Support:</strong> Container images के लिए Linux, Windows, और ARM architectures support करता है</li>
      </ul>
      <p>
        Trivy scan process यह है — पहले target identify करता है (image, filesystem, repo), फिर relevant scanner activate करता है, vulnerability database से match करता है, और report generate करता है। Pehle scan में database download होती है — बाद के scans बहुत fast होते हैं।
      </p>

      <h2>Installation</h2>
      <p>
        Trivy install करना बहुत आसान है — single binary है, कोई runtime dependency नहीं।
      </p>
      <CodeBlock
        title="Trivy Installation"
        code={`# Kali Linux / Ubuntu / Debian:
sudo apt update
sudo apt install trivy

# Official install script (सबसे reliable):
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Go install:
go install github.com/aquasecurity/trivy/cmd/trivy@latest

# Docker (container scan):
docker run --rm aquasec/trivy:latest image nginx:latest

# Homebrew (macOS):
brew install trivy

# Snap:
sudo snap install trivy

# Arch Linux:
sudo pacman -S trivy

# Version check:
trivy --version

# Help:
trivy --help

# All subcommands:
trivy --help | grep -A20 "Available Commands"`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--severity</td><td className="py-2 px-3">Severity filter — UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL</td><td className="py-2 px-3 font-mono text-xs">--severity CRITICAL,HIGH</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--scanners</td><td className="py-2 px-3">Scanner type — vuln,misconfig,secret,license</td><td className="py-2 px-3 font-mono text-xs">--scanners vuln,secret</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f / --format</td><td className="py-2 px-3">Output format — table,json,cyclonedx,spdx,sarif</td><td className="py-2 px-3 font-mono text-xs">-f json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Output file</td><td className="py-2 px-3 font-mono text-xs">-o results.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--exit-code</td><td className="py-2 px-3">Exit code on vulnerabilities (CI/CD)</td><td className="py-2 px-3 font-mono text-xs">--exit-code 1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--ignore-unfixed</td><td className="py-2 px-3">Unfixed vulnerabilities skip करें</td><td className="py-2 px-3 font-mono text-xs">--ignore-unfixed</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--skip-dirs</td><td className="py-2 px-3">Directories skip करें</td><td className="py-2 px-3 font-mono text-xs">--skip-dirs node_modules,vendor</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--skip-files</td><td className="py-2 px-3">Files skip करें</td><td className="py-2 px-3 font-mono text-xs">--skip-files "*.test.js"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--db-repository</td><td className="py-2 px-3">Custom vulnerability DB</td><td className="py-2 px-3 font-mono text-xs">--db-repository ghcr.io/.../trivy-db</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--skip-db-update</td><td className="py-2 px-3">DB update skip (faster scan)</td><td className="py-2 px-3 font-mono text-xs">--skip-db-update</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--compliance</td><td className="py-2 px-3">Compliance spec (NSA, CIS)</td><td className="py-2 px-3 font-mono text-xs">--compliance nsa</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--vuln-type</td><td className="py-2 px-3">Vulnerability types — os,library</td><td className="py-2 px-3 font-mono text-xs">--vuln-type os</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--offline-scan</td><td className="py-2 px-3">Offline mode — no network requests</td><td className="py-2 px-3 font-mono text-xs">--offline-scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--timeout</td><td className="py-2 px-3">Timeout duration</td><td className="py-2 px-3 font-mono text-xs">--timeout 10m</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--debug</td><td className="py-2 px-3">Debug mode — verbose output</td><td className="py-2 px-3 font-mono text-xs">--debug</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scanner Types</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Scanner</th>
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">image</td><td className="py-2 px-3">trivy image</td><td className="py-2 px-3">Docker/OCI image vulnerabilities</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fs</td><td className="py-2 px-3">trivy fs</td><td className="py-2 px-3">Filesystem scan — code, dependencies</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">config</td><td className="py-2 px-3">trivy config</td><td className="py-2 px-3">IaC misconfigurations (Terraform, K8s)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">k8s</td><td className="py-2 px-3">trivy k8s</td><td className="py-2 px-3">Kubernetes cluster scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">repo</td><td className="py-2 px-3">trivy repo</td><td className="py-2 px-3">Git repository scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sbom</td><td className="py-2 px-3">trivy sbom</td><td className="py-2 px-3">SBOM generation और scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vex</td><td className="py-2 px-3">trivy vex</td><td className="py-2 px-3">VEX document scan</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">plugin</td><td className="py-2 px-3">trivy plugin</td><td className="py-2 px-3">Custom plugins install और run</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Basic Usage</h2>
      <p>
        Trivy का basic usage बहुत simple है — बस command type और target दो।
      </p>
      <CodeBlock
        title="Trivy Basic Commands"
        code={`# Docker image scan:
trivy image nginx:latest

# Specific severity:
trivy image --severity HIGH,CRITICAL nginx:latest

# JSON output:
trivy image -f json -o results.json nginx:latest

# Filesystem scan:
trivy fs .

# Secret detection:
trivy fs --scanners secret .

# IaC scan:
trivy config terraform/

# Kubernetes cluster:
trivy k8s --report summary cluster

# Git repository:
trivy repo https://github.com/user/repo

# SBOM generate:
trivy image --format cyclonedx -o sbom.json nginx:latest

# All scanners together:
trivy fs --scanners vuln,misconfig,secret,license .`}
      />

      <h2>Docker Image Scan</h2>
      <p>
        Trivy का सबसे common use case Docker image scanning है। Container images में hidden vulnerabilities होती हैं — base image के outdated packages, vulnerable dependencies, embedded secrets — Trivy सब ढूंढ लेता है।
      </p>
      <CodeBlock
        title="Image Vulnerability Scanning"
        code={`# Basic image scan:
trivy image nginx:latest

# Specific image with tag:
trivy image myapp:v1.0

# Severity filter (सिर्फ critical और high):
trivy image --severity HIGH,CRITICAL nginx:latest

# JSON output (automation के लिए):
trivy image -f json -o results.json nginx:latest

# Unfixed vulnerabilities भी दिखाओ:
trivy image --ignore-unfixed=false nginx:latest

# DB update skip (faster — cached DB use करो):
trivy image --skip-db-update nginx:latest

# Summary mode:
trivy image --format table --severity CRITICAL nginx:latest

# CI/CD — exit code 1 on vulnerabilities:
trivy image --exit-code 1 --severity CRITICAL nginx:latest

# Tar file से scan:
trivy image --input myimage.tar

# Remote image (Docker Hub):
trivy image registry.example.com/myapp:latest

# Multiple images:
trivy image image1:latest image2:latest image3:latest`}
      />

      <h2>Filesystem Scan</h2>
      <p>
        Filesystem scan project directory में vulnerabilities, secrets, और misconfigurations ढूंढता है। Dependency files (package.json, requirements.txt, go.sum) parse करके known vulnerabilities detect करता है।
      </p>
      <CodeBlock
        title="Filesystem Vulnerability Scan"
        code={`# Current directory scan:
trivy fs .

# Specific directory:
trivy fs /path/to/project

# Vulnerabilities only:
trivy fs --scanners vuln .

# Secrets detection:
trivy fs --scanners secret .

# License compliance:
trivy fs --scanners license .

# Multiple scanners:
trivy fs --scanners vuln,secret,misconfig .

# Python project specific:
trivy fs --lang python .

# Skip heavy directories:
trivy fs --skip-dirs node_modules,vendor,.git .

# JSON output:
trivy fs -f json -o deps.json .

# SARIF output (GitHub Security):
trivy fs -f sarif -o results.sarif .

# Exit code on findings:
trivy fs --exit-code 1 --severity CRITICAL .`}
      />

      <h2>IaC Scanning</h2>
      <p>
        Infrastructure as Code files में security misconfigurations common होती हैं। Trivy Terraform, Kubernetes manifests, Dockerfile, CloudFormation, Helm charts — सब scan कर सकता है। IaC scanning shift-left security का key component है।
      </p>
      <CodeBlock
        title="Infrastructure as Code Scanning"
        code={`# Terraform scan:
trivy config terraform/

# Kubernetes manifests:
trivy config k8s/

# Dockerfile best practices:
trivy config Dockerfile

# CloudFormation templates:
trivy config cloudformation/

# Helm charts:
trivy config helm/

# All IaC files in directory:
trivy config .

# Severity filter:
trivy config --severity HIGH,MEDIUM terraform/

# JSON output:
trivy config -f json -o iac_results.json .

# Common misconfigurations Trivy detects:
# - Open security groups (0.0.0.0/0)
# - Unencrypted storage volumes
# - Missing resource limits in K8s
# - Root containers in Dockerfile
# - Privileged containers
# - Missing network policies
# - Weak passwords in configs
# - Publicly accessible databases
# - Missing logging/monitoring
# - Overly permissive IAM roles`}
      />

      <h2>Kubernetes Scanning</h2>
      <p>
        Kubernetes cluster scanning live resources को analyze करता है — running pods, deployments, services, configmaps सब check होते हैं।
      </p>
      <CodeBlock
        title="Kubernetes Cluster Scan"
        code={`# Cluster scan (summary report):
trivy k8s --report summary cluster

# Detailed report:
trivy k8s --report all cluster

# Specific namespace:
trivy k8s --namespace default cluster

# Specific resource type:
trivy k8s --kind deployment cluster

# JSON output:
trivy k8s -f json -o k8s_results.json cluster

# Misconfigurations only:
trivy k8s --scanners misconfig cluster

# Vulnerabilities in running pods:
trivy k8s --scanners vuln cluster

# NSA compliance check:
trivy k8s --compliance nsa cluster

# CIS benchmark:
trivy k8s --compliance cis cluster

# Specific context:
trivy k8s --context my-cluster cluster`}
      />

      <h2>Git Repository Scan</h2>
      <CodeBlock
        title="Repository Scanning"
        code={`# Local git repo:
trivy repo .

# Remote repo:
trivy repo https://github.com/user/repo

# Specific branch:
trivy repo --branch main https://github.com/user/repo

# Specific tag:
trivy repo --tag v1.0.0 https://github.com/user/repo

# Full scan (vuln + misconfig + secret):
trivy repo --scanners vuln,misconfig,secret .

# Skip specific directories:
trivy repo --skip-dirs test,docs .

# SARIF output for GitHub:
trivy repo -f sarif -o repo_scan.sarif .`}
      />

      <h2>SBOM Generation</h2>
      <p>
        SBOM (Software Bill of Materials) software components की inventory है। Supply chain security के लिए ज़रूरी है — जब किसी library में vulnerability मिलती है, तो SBOM से पता चलता है कि कौन से projects affected हैं।
      </p>
      <CodeBlock
        title="SBOM Generation और Scanning"
        code={`# CycloneDX format में SBOM:
trivy image --format cyclonedx -o sbom.json nginx:latest

# SPDX format:
trivy image --format spdx -o sbom.spdx nginx:latest

# SBOM से vulnerabilities scan:
trivy sbom sbom.json

# Filesystem SBOM:
trivy fs --format cyclonedx -o project_sbom.json .

# Kubernetes SBOM:
trivy k8s --format cyclonedx -o cluster_sbom.json cluster

# SBOM with all component types:
trivy image --format cyclonedx --output sbom-full.json nginx:latest

# SBOM diff (दो versions compare):
trivy sbom sbom_v1.json
trivy sbom sbom_v2.json`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Trivy को scripts और automation में integrate करना बहुत आसान है।
      </p>
      <CodeBlock
        title="CI/CD Integration — GitHub Actions"
        code={`# .github/workflows/trivy.yml:
name: Trivy Security Scan
on: [push, pull_request]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Run Trivy filesystem scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          severity: 'CRITICAL,HIGH'
          format: 'sarif'
          output: 'trivy-results.sarif'

      - name: Upload to GitHub Security
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'

      - name: Run Trivy image scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'image'
          image-ref: 'myapp:latest'
          severity: 'CRITICAL'
          format: 'table'
          exit-code: '1'`}
      />

      <CodeBlock
        title="GitLab CI Integration"
        code={`# .gitlab-ci.yml:
trivy_scan:
  image: aquasec/trivy:latest
  script:
    - trivy fs --exit-code 1 --severity CRITICAL,HIGH .
  artifacts:
    reports:
      sast: trivy-report.json
  allow_failure: false`}
      />

      <CodeBlock
        title="Multi-Image Scan Script"
        code={`#!/bin/bash
# सभी Docker images scan करो:
images=$(docker images --format "{{.Repository}}:{{.Tag}}" | grep -v "<none>")

for image in $images; do
    echo "[*] Scanning: $image"
    trivy image --severity HIGH,CRITICAL --exit-code 1 "$image"
    if [ $? -eq 1 ]; then
        echo "[!] VULNERABILITIES FOUND in $image"
    else
        echo "[+] CLEAN: $image"
    fi
done`}
      />

      <h2>Custom Configuration</h2>
      <CodeBlock
        title="trivy.yaml Config File"
        code={`# trivy.yaml — project-level config:
# Scan settings
scan:
  scanners:
    - vuln
    - misconfig
    - secret
    - license

# Severity filter
severity:
  - CRITICAL
  - HIGH

# Skip directories
skip-dirs:
  - node_modules
  - vendor
  - .git
  - test
  - __pycache__

# Skip files
skip-files:
  - "*.test.js"
  - "*.spec.py"
  - "*.md"

# Output format
format: table

# Exit code
exit-code: 1

# DB repository (air-gapped environments):
db-repository: ghcr.io/aquasecurity/trivy-db`}
      />

      <h2>Trivy vs Other Scanners</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Trivy</th>
              <th className="text-left py-2 px-3 text-neon-green">Grype</th>
              <th className="text-left py-2 px-3 text-neon-green">Snyk</th>
              <th className="text-left py-2 px-3 text-neon-green">Clair</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Open Source</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Freemium</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IaC Scan</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Secret Scan</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Malware Scan</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SBOM</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">धीमा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CI/CD</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Basic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Languages</td><td className="py-2 px-3">20+</td><td className="py-2 px-3">10+</td><td className="py-2 px-3">15+</td><td className="py-2 px-3">5+</td></tr>
            <tr><td className="py-2 px-3 text-white">CNCF Status</td><td className="py-2 px-3">Graduated</td><td className="py-2 px-3">—</td><td className="py-2 px-3">—</td><td className="py-2 px-3">Incubating</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Database update fail हो रहा है', a: 'Network issue हो सकता है। Manual update: trivy image --download-db-only। Custom mirror: --db-repository ghcr.io/aquasecurity/trivy-db। Air-gapped: offline DB bundle download करो और local registry में push करो।' },
          { q: 'बहुत ज़्यादा results आ रहे हैं', a: 'Severity filter use करो: --severity CRITICAL,HIGH। Unfixed skip: --ignore-unfixed। Directories skip: --skip-dirs node_modules,vendor। Specific scanners: --scanners vuln (sirf vulnerabilities)।' },
          { q: 'Scan बहुत slow है', a: 'DB update skip: --skip-db-update। Specific scanners use करो: --scanners vuln। Skip directories: --skip-dirs node_modules,vendor,.git। Parallel scanning: multiple targets एक साथ scan करो।' },
          { q: 'CI/CD में build fail नहीं हो रहा', a: '--exit-code 1 flag mandatory है। बिना इसके Trivy हमेशा exit code 0 return करता है। Verify: echo $? check करो scan के बाद।' },
          { q: 'False positives बहुत हैं', a: '.trivyignore file बनाओ और specific CVEs ignore करो। --ignore-unfixed use करो। --ignore-file flag से custom ignore list दो।' },
          { q: 'Private registry से image scan नहीं हो रहा', a: 'Docker login करो पहले: docker login registry.example.com। फिर: trivy image registry.example.com/myapp:latest। Custom credentials: --username और --password flags use करो।' },
          { q: 'Kubernetes cluster access नहीं मिल रहा', a: 'kubectl configure करो: kubectl config use-context my-cluster। Kubeconfig specify: --kubeconfig /path/to/config। Namespace: --namespace default।' },
          { q: 'SBOM format कौन सा use करें?', a: 'CycloneDX (OWASP standard) या SPDX (Linux Foundation standard)। GitHub/GitLab integration: CycloneDX better support। Compliance requirements: SPDX। दोनों open standards हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Trivy findings से कैसे defend करें — vulnerabilities fix करने का approach:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Base Image Update:</strong> हमेशा latest stable base images use करो — alpine:3.18, node:20-alpine, python:3.12-slim</li>
        <li><strong className="text-white">Multi-Stage Builds:</strong> Build tools runtime image में मत रखो — multi-stage Dockerfile use करो</li>
        <li><strong className="text-white">Dependency Updates:</strong> Regularly dependencies update करो — npm audit fix, pip-audit, go mod tidy</li>
        <li><strong className="text-white">Distroless Images:</strong> Google distroless images use करो — minimal attack surface, no shell, no package manager</li>
        <li><strong className="text-white">.trivyignore:</strong> Verified false positives को .trivyignore file में list करो</li>
        <li><strong className="text-white">CI/CD Gate:</strong> CRITICAL और HIGH vulnerabilities पर build fail करो — production में vulnerable code नहीं जाना चाहिए</li>
        <li><strong className="text-white">SBOM Maintenance:</strong> हर release के साथ SBOM generate करो — supply chain visibility के लिए</li>
        <li><strong className="text-white">Image Signing:</strong> Cosign या Notary से images sign करो — tamper detection</li>
        <li><strong className="text-white">Admission Control:</strong> Kubernetes में OPA Gatekeeper या Kyverno use करो — vulnerable images block करो</li>
        <li><strong className="text-white">Regular Re-scanning:</strong> Daily/weekly scheduled scans — new CVEs constantly discover होती हैं</li>
        <li><strong className="text-white">Runtime Security:</strong> Falco या Sysdig use करो runtime पर — Trivy static analysis है, runtime threats अलग handle होंगी</li>
        <li><strong className="text-white">Network Policies:</strong> Kubernetes NetworkPolicies implement करो — compromised container lateral movement नहीं कर पाएगी</li>
        <li><strong className="text-white">Least Privilege:</strong> Containers को minimum permissions दो — root access avoid करो, read-only filesystems use करो</li>
        <li><strong className="text-white">Secret Management:</strong> Hardcoded secrets avoid करो — Vault, AWS Secrets Manager, या Kubernetes Secrets use करो</li>
        <li><strong className="text-white">Supply Chain Security:</strong> Verified publishers से ही packages use करो — lock files commit करो, dependency review enable करो</li>
        <li><strong className="text-white">VEX Documents:</strong> Vulnerability Exploitability eXchange generate करो — context-specific risk assessment provide करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Trivy practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# Trivy install:
sudo apt install trivy

# Vulnerable Docker images for practice:
docker pull vulnerables/web-dvwa
trivy image vulnerables/web-dvwa

# Old images with known CVEs:
docker pull nginx:1.14
trivy image nginx:1.14

docker pull node:12
trivy image node:12

docker pull ubuntu:14.04
trivy image ubuntu:14.04

# Custom vulnerable Dockerfile practice:
cat > Dockerfile << 'EOF'
FROM ubuntu:14.04
RUN apt-get update && apt-get install -y openssl wget curl
COPY . /app
WORKDIR /app
CMD ["python", "app.py"]
EOF

trivy config Dockerfile

# Practice project with vulnerable dependencies:
mkdir trivy-lab && cd trivy-lab
cat > package.json << 'EOF'
{
  "dependencies": {
    "express": "4.17.1",
    "lodash": "4.17.15",
    "minimist": "1.2.5"
  }
}
EOF
trivy fs .

# Terraform misconfig practice:
cat > main.tf << 'EOF'
resource "aws_s3_bucket" "example" {
  bucket = "my-public-bucket"
}
resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.example.id
  block_public_acls = false
}
EOF
trivy config .`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Trivy Usage"
        code={`# Docker Compose — all services scan:
#!/bin/bash
for image in $(docker compose config | grep "image:" | awk '{print $2}'); do
    echo "[*] Scanning $image..."
    trivy image --severity HIGH,CRITICAL "$image"
done

# Air-gapped environment — offline DB:
# 1. Download DB on connected machine:
trivy image --download-db-only
# 2. Copy DB to air-gapped machine:
cp -r ~/.cache/trivy /path/to/transfer/
# 3. Use offline:
trivy image --offline-scan nginx:latest

# Custom OPA policy:
# policy/custom.rego
package trivy

deny[msg] {
    input.Type == "Dockerfile"
    input.Value.Cmd == "run"
    contains(input.Value.Value, "apt-get install")
    not contains(input.Value.Value, "--no-install-recommends")
    msg := "Use --no-install-recommends with apt-get install"
}

trivy config --policy ./policy .

# Pre-commit hook:
# .pre-commit-config.yaml:
repos:
  - repo: local
    hooks:
      - id: trivy
        name: Trivy Security Scan
        entry: trivy fs --scanners vuln,secret --exit-code 1 --severity CRITICAL .
        language: system
        pass_filenames: false

# Kubernetes admission controller:
# Trivy operator install:
helm install trivy-operator aquasecurity/trivy-operator

# Generate compliance report:
trivy k8s --compliance nsa --report all cluster > compliance_report.json

# Custom severity exit codes:
trivy image --exit-code 1 --severity CRITICAL myapp:v1
# Exit code 1 = vulnerabilities found
# Exit code 0 = clean

# Image scanning with specific platform:
trivy image --platform linux/amd64 multi-arch:latest

# Scan multiple images in parallel:
trivy image img1:latest &
trivy image img2:latest &
trivy image img3:latest &
wait`}
      />

      <h2>CI/CD Best Practices</h2>
      <p>
        Trivy को CI/CD pipeline में effectively integrate करने के लिए best practices:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Practice</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">कब इस्तेमाल करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PR Scan</td><td className="py-2 px-3">हर PR पर scan — new vulns catch</td><td className="py-2 px-3">हमेशा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Build Gate</td><td className="py-2 px-3">CRITICAL vulns पर build fail</td><td className="py-2 px-3">Production builds</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Scheduled Scan</td><td className="py-2 px-3">Daily/weekly full scan — new CVEs</td><td className="py-2 px-3">Maintained projects</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Image Scan</td><td className="py-2 px-3">Docker image push से पहले</td><td className="py-2 px-3">Container workflows</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SBOM Generation</td><td className="py-2 px-3">हर release के साथ SBOM</td><td className="py-2 px-3">Supply chain compliance</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SARIF Upload</td><td className="py-2 px-3">GitHub Security tab में results</td><td className="py-2 px-3">GitHub Actions</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Dockerfile Security Best Practices</h2>
      <CodeBlock
        title="Secure Dockerfile Template"
        code={`# Secure Dockerfile — Trivy-friendly:
# Multi-stage build:
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Runtime stage — minimal image:
FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
COPY --from=builder /app .

# Security best practices:
# 1. Non-root user
USER nonroot:nonroot

# 2. Read-only filesystem
# (Docker: --read-only)

# 3. No unnecessary packages
# (distroless = no shell, no package manager)

# 4. Health check
HEALTHCHECK --interval=30s CMD ["node", "healthcheck.js"]

# 5. Labels for metadata
LABEL org.opencontainers.image.source="https://github.com/user/repo"

EXPOSE 3000
CMD ["server.js"]

# Scan this Dockerfile:
# trivy config Dockerfile
# Expected: minimal findings`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े projects और multiple images scan करते समय Trivy की performance optimize करना ज़रूरी है। DB caching, parallel scanning, और selective scanning strategies से scan time काफी कम हो सकता है।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# DB cache use करो — हर बार DB download skip करो:
trivy image --skip-db-update myapp:latest

# Light scan (OS packages only, skip language packages):
trivy image --vuln-type os myapp:latest

# Specific severity filter — scan time कम होता है:
trivy image --severity CRITICAL,HIGH myapp:latest

# Parallel scanning (multiple images):
for img in app1:latest app2:latest app3:latest; do
    trivy image $img > "report_${img%:*}.txt" &
done
wait

# Cache directory customize करो:
trivy image --cache-dir /tmp/trivy-cache myapp:latest

# DB mirror (local registry) — faster downloads:
trivy image --db-repository myregistry/trivy-db myapp:latest

# Skip unnecessary scanners:
trivy image --scanners vuln --skip-dirs node_modules myapp:latest`}
      />

      <h2>License Compliance Scanning</h2>
      <p>
        Open source licenses check करना compliance के लिए ज़रूरी है। कुछ licenses (GPL, AGPL) restrictive होती हैं और commercial use में problems आ सकती हैं।
      </p>
      <CodeBlock
        title="License Scanning"
        code={`# License scan:
trivy fs --scanners license .

# Specific severity:
trivy fs --scanners license --severity HIGH,MEDIUM .

# JSON output:
trivy fs --scanners license -f json -o licenses.json .

# Common license categories:
# Permissive: MIT, Apache 2.0, BSD — generally safe
# Weak copyleft: LGPL — modifications must be shared
# Strong copyleft: GPL, AGPL — entire work must be open source
# Unknown: custom licenses — manual review needed

# Trivy flags problematic licenses based on policy`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Trivy क्या-क्या scan कर सकता है?', a: 'Docker images, filesystems, Terraform, Kubernetes, Dockerfile, Helm charts, Git repos, secrets, licenses, malware — सब scan कर सकता है। 300,000+ known vulnerabilities cover होती हैं।' },
          { q: 'CI/CD में कैसे integrate करें?', a: 'GitHub Actions, GitLab CI, Jenkins सब में integrate होता है। --exit-code 1 flag से build fail होता है जब vulnerabilities मिलती हैं। Aqua Security official GitHub Action भी available है।' },
          { q: 'क्या Trivy free है?', a: 'हाँ, Trivy completely open source है (Apache 2.0 license)। Aqua Security enterprise version भी offer करता है — additional features जैसे malware scanning, real-time monitoring, compliance reporting। Community version सब features के साथ free है।' },
          { q: 'SBOM क्यों ज़रूरी है?', a: 'Supply chain security के लिए। पता चलता है कौन-कौन से components use हो रहे हैं। जब किसी library में vulnerability मिलती है, तो SBOM से पता चलता है कौन से projects affected हैं। Executive Order 14028 (US) ने SBOM mandate किया है।' },
          { q: 'कितना fast है Trivy?', a: 'पहले scan में DB download होती है — 2-3 minute लग सकते हैं। बाद के scans 30-60 seconds में complete होते हैं। --skip-db-update से और fast होता है। Grype और Clair से generally faster है।' },
          { q: 'Air-gapped environment में कैसे use करें?', a: 'Connected machine पर DB download करो: trivy image --download-db-only। DB files copy करो air-gapped machine पर। --offline-scan flag use करो। Custom --db-repository local registry का path दो।' },
          { q: 'False positives कैसे handle करें?', a: '.trivyignore file बनाओ — एक line per CVE ID। --ignore-file flag से custom ignore list दो। --ignore-unfixed से unfixed vulnerabilities skip होंगी। Verified false positives को report करो Trivy GitHub पर।' },
          { q: 'Private registry से scan कैसे करें?', a: 'पहले Docker login: docker login registry.example.com। फिर: trivy image registry.example.com/app:latest। Username/password flags भी use कर सकते हो: --username user --password pass।' },
          { q: 'Trivy vs Grype — कौन सा better है?', a: 'दोनों excellent हैं। Trivy ज़्यादा scanners support करता है (IaC, secrets, license, malware)। Grype lightweight है और SBOM-focused है। Multi-scanning के लिए Trivy, speed के लिए Grype।' },
          { q: 'Kubernetes cluster scan कैसे करें?', a: 'trivy k8s --report summary cluster — पूरा cluster scan हो जाएगा। Specific namespace: trivy k8s -n default --report summary। RBAC permissions चाहिए — ClusterRole view minimum।' },
          { q: 'Trivy DB कितनी बड़ी है?', a: 'लगभग 30-40MB compressed। First download में 2-3 minute लगते हैं। हर 12 hours में DB update होती है। --skip-db-update से local cache use कर सकते हो।' },
          { q: 'Compliance reports generate कैसे करें?', a: 'trivy image --compliance docker-cis myapp:latest — CIS Docker benchmark। --format json से structured output मिलेगा। Custom compliance policies Rego में लिख सकते हो।' },
          { q: 'Multi-architecture images scan कैसे करें?', a: 'trivy image --platform linux/amd64,linux/arm64 myapp:latest। --platform flag से specific architecture select कर सकते हो। Default: host architecture।' },
          { q: 'Trivy से SBOM export कैसे करें?', a: 'trivy sbom --format spdx-json -o sbom.json myapp:latest। CycloneDX format भी support है: --format cyclonedx। SBOM tools जैसे Dependency-Track में import कर सकते हो।' },
          { q: 'Git repository scan कैसे करें?', a: 'trivy repo https://github.com/user/repo — पूरा repo scan हो जाएगा। Local repo: trivy repo /path/to/repo। --branch flag से specific branch scan कर सकते हो।' },
          { q: 'Trivy server mode क्या है?', a: 'trivy server --listen 0.0.0.0:8080 — centralized scanning server start हो जाएगा। Clients: trivy image --server http://server:8080 myapp:latest। DB download हर client को अलग नहीं करना पड़ेगा — efficient for teams।' },
          { q: 'Scan results export कैसे करें?', a: 'Multiple formats: --format json -o report.json, --format table (default), --format sarif (GitHub), --format cyclonedx (SBOM)। JSON output से custom dashboards और automation scripts बना सकते हो।' },
          { q: 'Vulnerability fix verify कैसे करें?', a: 'Fix apply करने के बाद same command से re-scan करो। --diff flag से previous scan से compare हो जाएगा। Fixed vulnerabilities list show होंगी। CI/CD में baseline comparison setup कर सकते हो।' },
          { q: 'Helm chart scan कैसे करें?', a: 'trivy config ./helm-chart-dir — पूरा chart scan हो जाएगा। Values, templates, और rendered manifests सब check होंगे। Misconfigurations, secrets, और security issues detect होंगी।' },
          { q: 'Trivy cache clear कैसे करें?', a: 'trivy image --clear-cache — vulnerability DB cache clear हो जाएगी। --cache-dir /custom/path से custom cache location set कर सकते हो। Fresh scan करने से पहले cache clear करो latest DB use करने के लिए।' },
          { q: 'Air-gapped environment में Trivy कैसे use करें?', a: 'Online environment से DB download करो: trivy image --download-db-only। DB files copy करो air-gapped system पर --cache-dir location में। --skip-db-update flag से scan करो। DB mirror registry भी setup कर सकते हो।' },
          { q: 'Trivy plugin system कैसे use करें?', a: 'trivy plugin install github.com/org/plugin — install हो जाएगा। trivy plugin run <plugin-name> -- args से run करो। Custom Rego policies, custom scanners, और output formatters plugin system से add कर सकते हो।' },
          { q: 'Multiple images batch scan कैसे करें?', a: 'Shell loop: for img in $(docker images --format "{{.Repository}}:{{.Tag}}"); do trivy image $img; done। --format json से structured output collect करो। Parallel execution: xargs -P 4 से 4 images simultaneously scan कर सकते हो।' },
          { q: 'Trivy GitHub Security tab में results कैसे देखें?', a: '--format sarif -o trivy.sarif output generate करो। GitHub Actions में github/codeql-action/upload-sarif action use करो। SARIF file upload होने पर Security tab > Code scanning में results दिखेंगी।' },
          { q: 'Trivy से malware scan कैसे करें?', a: 'trivy fs --scanners malware . — filesystem malware scan हो जाएगा। Container images में भी scan होता है automatically। Known malware signatures, suspicious patterns, और crypto miners detect होते हैं।' },
          { q: 'Trivy DB mirror कैसे setup करें?', a: 'Internal registry में DB copy करो: trivy image --db-repository myregistry.io/trivy-db। Air-gapped environments में manual DB download और import करना पड़ता है। --db-repository flag से custom mirror URL set करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        एक fintech startup ने CI/CD pipeline में Trivy integrate किया। पहले audit में 47 CRITICAL vulnerabilities मिलीं production Docker images में — जिनमें से 12 known exploited vulnerabilities थीं। Trivy की detailed fix suggestions से development team ने 2 हफ्ते में सब fix कर लीं। बिना Trivy के यह vulnerabilities months तक production में रहतीं।
      </p>
      <p>
        एक e-commerce company का supply chain attack हुआ — compromised npm package ने malicious code inject किया। Trivy का filesystem scan use करके team ने affected dependencies identify कीं और SBOM generate किया जिससे पता चला कि 23 microservices affected हैं। Trivy की malware detection capability ने malicious package flag कर दिया।
      </p>
      <p>
        Government cloud migration project में Trivy से Terraform files scan कीं — 156 misconfigurations मिलीं जिनमें publicly exposed S3 buckets, open security groups, और unencrypted databases शामिल थे। Compliance team ने Trivy reports use करके audit pass किया। Trivy का compliance scanning feature CIS benchmarks और NIST frameworks support करता है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Trivy को CI/CD platforms, container registries, और security dashboards के साथ integrate करके complete DevSecOps pipeline बना सकते हो। GitHub Actions, GitLab CI, Jenkins, और ArgoCD के साथ native integration available है।
      </p>
      <CodeBlock
        title="GitHub Actions Integration"
        code={`# .github/workflows/security.yml
name: Security Scan
on: [push, pull_request]
jobs:
  trivy-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t myapp:$GITHUB_SHA .
      - name: Trivy vulnerability scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'myapp:$GITHUB_SHA'
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'
      - name: Upload Trivy scan results
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'`}
      />
      <CodeBlock
        title="Trivy + Prometheus Monitoring"
        code={`# Trivy metrics export करो Prometheus के लिए:
trivy image --format json -o results.json myapp:latest

# JSON से metrics extract करो:
cat results.json | jq '.Results[]?.Vulnerabilities[]? |
  select(.Severity=="CRITICAL")' | jq -s 'length'

# Prometheus textfile collector:
cat > /var/lib/node_exporter/trivy.prom << EOF
trivy_critical_vulnerabilities $(cat results.json | jq '[.Results[]?.Vulnerabilities[]? | select(.Severity=="CRITICAL")] | length')
trivy_high_vulnerabilities $(cat results.json | jq '[.Results[]?.Vulnerabilities[]? | select(.Severity=="HIGH")] | length')
EOF

# Alert rule (Prometheus):
# - alert: CriticalVulnerabilityFound
#   expr: trivy_critical_vulnerabilities > 0
#   for: 5m
#   labels:
#     severity: critical`}
      />
      <CodeBlock
        title="Trivy + Harbor Registry Integration"
        code={`# Harbor registry में Trivy scanner enable करो:
# Harbor UI > Interrogation Services > Scanners > Add Scanner
# Endpoint: http://trivy-server:8080

# Trivy server mode start करो:
trivy server --listen 0.0.0.0:8080

# Harbor API से scan trigger करो:
curl -X POST https://harbor.example.com/api/v2.0/projects/myproject/repositories/myrepo/artifacts/latest/scan \\
  -H "Authorization: Basic $(echo -n admin:password | base64)"

# Scan results check करो:
curl https://harbor.example.com/api/v2.0/projects/myproject/repositories/myrepo/artifacts/latest/scan \\
  -H "Authorization: Basic $(echo -n admin:password | base64)"`}
      />

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Grype</td><td className="py-2 px-3">Container vulnerability scanner</td><td className="py-2 px-3">Anchore का tool, fast, SBOM integration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Clair</td><td className="py-2 px-3">Container analysis engine</td><td className="py-2 px-3">CoreOS/RedHat, API-based, CNCF project</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Snyk Container</td><td className="py-2 px-3">Container security platform</td><td className="py-2 px-3">Developer-friendly, fix suggestions, freemium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Docker Scout</td><td className="py-2 px-3">Docker native scanning</td><td className="py-2 px-3">Docker Hub integration, built into Docker Desktop</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Checkov</td><td className="py-2 px-3">IaC scanner</td><td className="py-2 px-3">Terraform/K8s/Dockerfile focus, Bridgecrew/Palo Alto</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tfsec</td><td className="py-2 px-3">Terraform security scanner</td><td className="py-2 px-3">Terraform-specific, now part of Trivy</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Semgrep</td><td className="py-2 px-3">SAST scanner</td><td className="py-2 px-3">Code-level vulnerabilities, custom rules</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 DevSecOps Tip:</strong> Trivy CI/CD में gate लगाओ — HIGH और CRITICAL vulnerabilities हों तो build fail करो। Pre-commit hooks में भी use कर सकते हो। SBOM generate करो हर release के साथ। Dockerfile scan करो image build से पहले — shift-left security approach। .trivyignore file maintain करो verified false positives के लिए।
      </div>

      <div className="success-box mt-8">
        <strong>✅ Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>CI/CD में Trivy gate लगाओ — CRITICAL vulns हों तो build fail करो</li>
          <li>--severity CRITICAL,HIGH से important issues पर focus करो</li>
          <li>SBOM generate करो supply chain security के लिए</li>
          <li>Dockerfile scan करो image build से पहले</li>
          <li>--ignore-unfixed से noise कम होगा</li>
          <li>Pre-commit hooks में Trivy लगाओ</li>
          <li>Terraform scan से cloud misconfigurations catch होंगी</li>
          <li>Regular DB update करो ताकि latest CVEs मिलें</li>
          <li>Distroless images use करो — minimal attack surface</li>
          <li>Multi-stage builds से runtime image size कम और secure होगा</li>
          <li>Trivy server mode use करो team environment में — centralized scanning, shared DB cache</li>
          <li>--offline-scan flag use करो restricted networks में — no external API calls</li>
          <li>VEX (Vulnerability Exploitability eXchange) document generate करो false positives reduce करने के लिए</li>
          <li>Trivy plugin system explore करो — custom policies और checks add कर सकते हो</li>
          <li>Image ref by digest use करो tags की जगह — reproducible builds ke liye</li>
          <li>Secret scanning enable करो filesystem scan में — API keys, passwords automatically detect होंगे</li>
          <li>Trivy DB mirror setup करो air-gapped environments में — local DB updates faster होंगी</li>
          <li>Custom Rego policies लिखो organization-specific security requirements के लिए</li>
        </ul>
      </div>

      <div className="warning-box mt-4">
        <strong>⚠️ फाइनल वार्निंग:</strong> Security scanning सिर्फ एक layer है defense की। Trivy सब vulnerabilities नहीं ढूंढता — zero-days, business logic flaws, या complex attack chains miss हो सकती हैं। Defense in depth approach use करो — multiple layers of security। Container scanning important है लेकिन network security, access control, monitoring — सब equally important हैं।
      </div>
    </TutorialLayout>
  )
}
