devrev profiles authenticate --env dev --org gaston --usr gaston.donikian@devrev.ai
if [ $? -eq 0 ]; then
  echo "Authentication Success!"
else
  echo "Authentication Failed!"
fi
version_package=$(devrev snap_in_package list | jq -r .id)
echo $version_package
for id in $version_package
do
v_id=$(devrev snap_in_version list --package $id | jq -r .id)
devrev snap_in_version delete-one $v_id
devrev snap_in_package delete-one $id
done