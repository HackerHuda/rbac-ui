const PermissionEditor = ({ permissions, onChange }) => {
    const availablePermissions = ["Read", "Write", "Delete"];
  
    return (
      <div>
        {availablePermissions.map((perm) => (
          <label key={perm} className="block">
            <input
              type="checkbox"
              value={perm}
              checked={permissions.includes(perm)}
              onChange={(e) =>
                onChange(
                  e.target.checked
                    ? [...permissions, perm]
                    : permissions.filter((p) => p !== perm)
                )
              }
            />
            {perm}
          </label>
        ))}
      </div>
    );
  };
  
  export default PermissionEditor;
  