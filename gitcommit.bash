git add .
echo "Enter the commit message:"
read commitMessage
git commit -m "$commitMessage"
echo "Enter the branch name:"
read branch
git push origin $branch