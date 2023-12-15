#!/bin/sh

# Change to the parent directory (where .git is located)
cd ..

# Install Husky in the 'client/.husky' directory
npx husky install client/.husky

# Create a 'pre-commit' file in 'client/.husky' with a script to run 'lint-staged' before each commit.
echo '#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged' > client/.husky/pre-commit

# Make the 'pre-commit' file executable
chmod +x client/.husky/pre-commit