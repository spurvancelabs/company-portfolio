#!/bin/bash

set -e

echo "🚀 Starting Web Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
FTP_SERVER="${FTP_SERVER}"
FTP_USER="${FTP_USERNAME}"
FTP_PASS="${FTP_PASSWORD}"
REMOTE_PATH="/home/c3llz0ne/spurvancelabs.com/web"

# Build the application
echo -e "${YELLOW}📦 Building Next.js application...${NC}"
cd apps/web
pnpm install --frozen-lockfile
pnpm build

# Create deployment package
echo -e "${YELLOW}📁 Creating deployment package...${NC}"
mkdir -p ../../deploy_tmp
cp -r .next/standalone/* ../../deploy_tmp/
cp -r .next/static ../../deploy_tmp/.next/
cp -r public ../../deploy_tmp/
cp .htaccess ../../deploy_tmp/ 2>/dev/null || true

# Deploy to server
echo -e "${YELLOW}📤 Deploying to server...${NC}"
cd ../../deploy_tmp

# Use lftp for FTPS deployment
lftp -c "set ftp:ssl-allow yes; set ftp:ssl-force yes; set ftp:ssl-protect-data yes; open -u $FTP_USER,$FTP_PASS $FTP_SERVER; mirror -R --delete --verbose ./ $REMOTE_PATH"

# Clean up
cd ..
rm -rf deploy_tmp

echo -e "${GREEN}✅ Web deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Visit: https://spurvancelabs.com${NC}"