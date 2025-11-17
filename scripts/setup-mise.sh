#!/usr/bin/env bash
set -e

# Check if mise is installed
if ! command -v mise &> /dev/null; then
	echo "📦 Installing mise..."

	# Download installer to a temp file for better error handling
	INSTALLER_SCRIPT=$(mktemp)
	trap "rm -f $INSTALLER_SCRIPT" EXIT

	echo "🔍 Downloading mise installer..."
	HTTP_CODE=$(curl -w "%{http_code}" -fsSL https://mise.run -o "$INSTALLER_SCRIPT" 2>&1 | tail -n1)
	CURL_EXIT=$?

	if [ $CURL_EXIT -ne 0 ]; then
		echo "❌ Failed to download mise installer (curl exit code: $CURL_EXIT)"
		echo "📋 HTTP response code: $HTTP_CODE"
		echo "🌐 Attempting with verbose output..."
		curl -v https://mise.run 2>&1 | head -n 50
		exit 1
	fi

	if [ "$HTTP_CODE" != "200" ]; then
		echo "❌ Failed to download mise installer (HTTP $HTTP_CODE)"
		echo "📄 Response content (first 500 chars):"
		head -c 500 "$INSTALLER_SCRIPT"
		echo ""
		exit 1
	fi

	echo "✅ Downloaded installer successfully, executing..."
	sh "$INSTALLER_SCRIPT"
	INSTALL_EXIT=$?

	if [ $INSTALL_EXIT -ne 0 ]; then
		echo "❌ mise installation failed (exit code: $INSTALL_EXIT)"
		exit 1
	fi

	# Add mise to PATH for this session
	export PATH="$HOME/.local/bin:$PATH"

	echo "✅ mise installed successfully"
fi

if [ -n "$CLAUDE_CODE_REMOTE" ]; then
	echo "☁️  Remote environment detected, running mise setup..."

	# Trust and install mise configuration
	mise trust
	mise install
fi
