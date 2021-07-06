import enLocale from 'element-ui/lib/locale/lang/en' // 引入element语言包
const en = {
  wolf: {
    'language': 'Language',
    'currentApp': 'Current App',
    'headerSearchPlaceHolder': 'Search wolf module',
    'dashboard': 'Dashboard',
    'docs': 'Docs',
    'logout': 'Log Out',
    'user': 'User',
    'role': 'Role',
    'application': 'Application',
    'permission': 'Permission',
    'category': 'Category',
    'resource': 'Resource',
    'auditLog': 'Audit Log',
    'app': 'App',
    'titleApp': 'App',
    'labelApp': 'App',
    'labelAppID': 'App ID',
    'promptChangeApp': 'Change App',
    'search': 'Search',
    'titleId': 'ID',
    'titleName': 'Name',
    'titleDescription': 'Description',
    'titleCreateTime': 'Create Time',
    'titleOperations': 'Operations',
    'labelDenyAll': 'Deny All',
    'labelAllowAll': 'Allow All',
    'labelEqualsMatch': 'Equals Match',
    'labelPrefixMatch': 'Prefix Match',
    'labelSuffixMatch': 'Suffix Match',
    'labelStartTime': 'Start Time',
    'labelEndTime': 'End Time',
    'btnCancel': 'Cancel',
    'btnConfirm': 'Confirm',
    'btnShow': 'Show',
    'btnEdit': 'Edit',
    'btnDelete': 'Delete',
    'btnReset': 'Reset',
    'btnLogin': 'Login',
    'btnDetail': 'Detail',
    'btnView': 'View',

    'pubRulesMessageLength_2_32': 'length must be between 2 and 32 characters',
    'pubRulesMessageIDFormat': 'only contain letters(a-zA-Z), numbers(0-9), underline(_), hyphen(-)',

    'appSearchPrompt': 'App ID or App Name',
    'appNewApplication': 'New Application',
    'appEditApplication': 'Edit Application',
    'appTitleRedirectUris': 'Redirect Uris',
    'appTitleAccessTokenLifetime': 'AccessToken Lifetime',
    'appTitleRefreshTokenLifetime': 'RefreshToken Lifetime',
    'appTitleDiagram': 'Diagram',

    'newAppPromptAppID': 'Application ID',
    'newAppLabelAppName': 'App Name',
    'newAppPromptAppName': 'Application Name',
    'newAppLabelDescription': 'Description',
    'newAppPromptDescription': 'Description',
    'newAppLabelAppSecret': 'App Secret',
    'newAppPromptAppSecret': 'Application secret',
    'newAppLabelRedirectUris': 'Redirect Uris',
    'newAppPromptRedirectUris': 'Redirect Url',
    'newAppPromptRedirectUrisBtn': '+ New Redirect Uri',
    'newAppLabelAccessTokenLifetime': 'AccessToken Lifetime',
    'newAppPromptAccessTokenLifetime': 'Access token lifetime in seconds',
    'newAppLabelRefreshTokenLifetime': 'RefreshToken Lifetime',
    'newAppPromptRefreshTokenLifetime': 'Refresh token lifetime in seconds',
    'appDiagramTitle': 'Application Diagram',

    'appRulesMessageIDRequired': 'Please Input Application ID',
    'appRulesMessageNameRequired': 'Please Input Application Name',

    'appPromptConfirmResetSecret': 'Confirm to reset the secret?',
    'appPromptConfirmRemove': 'Confirm to remove the application?',
    'appPromptAppIDExist': 'App ID already exists',
    'appPromptAppNameExist': 'App Name already exists',
    'appPromptRemoveSuccess': 'Delete succed!',
    'appPromptUpdateSuccess': '<div>Alter application success.</div>',
    'appPromptAddSuccess': '<div>Application added</div>',

    'loginPromptUsername': 'Username',
    'loginPromptPassword': 'Password',
    'loginPromptLoginForm': 'Login Form',

    'userNewUser': 'New User',
    'userEditUser': 'Edit User',
    'userSearchPrompt': 'username/nickname or mobile',

    'userTitleUserName': 'User Name',
    'userTitleNickName': 'Nick Name',
    'userTitleManager': 'Manager',
    'userTitleAppIds': 'App Ids',
    'userTitleStatus': 'Status',
    'userTitlePermissions': 'Permissions',

    'newUserLabelUsername': 'Username',
    'newUserPromptUsername': 'User Name',
    'newUserLabelNickname': 'Nickname',
    'newUserPromptNickname': 'Nick Name',
    'newUserLabelEmail': 'Email',
    'newUserPromptEmail': 'Email',
    'newUserLabelTel': 'Tel',
    'newUserPromptTel': 'Tel',
    'newUserPromptAppID': 'Management Apps',
    'newUserLabelManager': 'Manager',
    'newUserLabelManagerSuper': 'super',
    'newUserLabelManagerAdmin': 'admin',
    'newUserLabelManagerNone': 'none',
    'newUserLabelStatus': 'Status',
    'newUserLabelStatusNormal': 'normal',
    'newUserLabelStatusDisabled': 'disabled',

    'roleDetailLabelNoApplication': 'No Application',
    'roleDetailDialogTitle': 'Permission/Role Detail',
    'roleDetailLabelUsername': 'Username',
    'roleDetailLabelNickname': 'Nickname',
    'roleDetailLabelPermissions': 'Permissions',
    'roleDetailLabelRoles': 'Roles',

    'promptChangeRole': 'Change Role',
    'promptChangePermission': 'Change Permission',

    'userRulesMessageUsernameRequired': 'Please input username',
    'userRulesMessageNicknameRequired': 'Please input nickname',
    'userRulesMessageEmailFormat': 'Please input valid email',
    'userRulesMessageTelFormat': 'Please input valid phone number',
    'userRulesMessageAppIDRequired': 'Please select a management application.',

    'userPromptUsernameExist': 'Username already exists',
    'userPromptConfirmResetPassword': 'Confirm to reset the password of user?',
    'userPromptResetPasswordSuccess': '<div>Success to reset password! New password: ${password}</div><div>This information is only displayed once, please be sure to save this new password.</div>',
    'userPromptConfirmRemove': 'Confirm to remove the user?',
    'userPromptRemoveSuccess': 'Delete succed!',
    'userPromptUpdateSuccess': '<div>Alter user success.</div>',
    'userPromptAddSuccess': '<div>User name: ${username}</div><div>Password: ${password}</div><div>This information is only displayed once, please be sure to save this account and password.</div>',
    'userPromptUpdateRoleDetailSuccess': '<div>Alter permissions/roles success!</div>',

    'roleSearchPrompt': 'Role id or name',
    'roleNewRole': 'New Role',
    'roleEditRole': 'Edit Role',
    'roleViewRole': 'View Role',
    'roleTitlePermissions': 'Permissions',
    'newRoleLabelName': 'Name',
    'newRolePromptName': 'Role Name',
    'newRoleLabelDescription': 'Description',
    'newRolePromptDescription': 'Description',
    'newRoleLabelPermissions': 'Permissions',

    'roleRulesMessageIDRequired': 'Please input role ID',
    'roleRulesMessageNameRequired': 'Please input role name',

    'rolePromptIDExist': 'Role ID already exists',
    'rolePromptNameExist': 'Role Name already exists',
    'rolePromptConfirmRemove': 'Confirm to remove the role?',
    'rolePromptRemoveSuccess': 'Delete succed!',
    'rolePromptUpdateSuccess': '<div>Alter Role success.</div>',
    'rolePromptAddSuccess': '<div>Role added.</div>',

    'categorySearchPrompt': 'Category Name',
    'categoryNewCategory': 'New Category',
    'categoryEditCategory': 'Edit Category',
    'newCategoryLabelID': 'Category ID',
    'newCategoryPromptID': 'Category ID',
    'newCategoryLabelName': 'Name',
    'newCategoryPromptName': 'Category Name',

    'categoryRulesMessageNameRequired': 'Please input category name',

    'categoryPromptNameExist': 'Category Name already exists',
    'categoryPromptConfirmRemove': 'Confirm to remove the category?',
    'categoryPromptRemoveSuccess': 'Delete succed!',
    'categoryPromptUpdateSuccess': '<div>Alter Category success.</div>',
    'categoryPromptAddSuccess': '<div>Category added.</div>',

    'permSearchPrompt': 'Permission ID or Name',
    'permNewPermission': 'New Permission',
    'permEditPermission': 'Edit Permission',
    'permTitleCategory': 'Category',

    'newPermLabelID': 'ID',
    'newPermPromptID': 'Permission ID',
    'newPermLabelName': 'Name',
    'newPermPromptName': 'Permission Name',
    'newPermLabelDescription': 'Description',
    'newPermPromptDescription': 'Description',
    'newPermLabelCategory': 'Category',
    'newPermPromptCategory': 'Change Category',

    'permRulesMessageIDRequired': 'Please input permission id',
    'permRulesMessageNameRequired': 'Please input permission name',

    'permPromptIDExist': 'Permission id already exists',
    'permPromptNameExist': 'Permission name already exists',
    'permPromptConfirmRemove': 'Confirm to remove the permission?',
    'permPromptRemoveSuccess': 'Delete succed!',
    'permPromptUpdateSuccess': '<div>Alter Permission success.</div>',
    'permPromptAddSuccess': '<div>Permission added.</div>',

    'resSearchPrompt': 'Resource name or permission',
    'resNewResource': 'New Resource',
    'resEditResource': 'Edit Resource',
    'resTitleMatchType': 'Match type',
    'resTitleAction': 'Action(method)',
    'resTitlePermission': 'Permission',
    'newResourcePromptName': 'resource name',

    'resRulesMessageNameRequired': 'Please input resource name',
    'resRulesMessageNameLength': 'length must be between 1 and 512 characters',
    'resRulesMessagePermIDRequired': 'Please select a permission for resource',

    'resPromptResourceExist': 'Resource {${matchTypeKey}:${matchType}, ${actionKey}:${action}, ${nameKey}:${name}} already exists',
    'resPromptConfirmRemove': 'Confirm to remove the resource?',
    'resPromptRemoveSuccess': 'Delete succed!',
    'resPromptUpdateSuccess': '<div>Alter Resource success.</div>',
    'resPromptAddSuccess': '<div>Resource added.</div>',

    'alogPromptHttpMethod': 'Http Method',
    'alogPromptRequestStatus': 'Request status',
    'alogPromptUrl': 'Url for full match',
    'alogPromptIp': 'client ip',
    'alogPromptUsername': 'username or nickname for full match',
    'alogTitleUsername': 'Username',
    'alogTitleMethod': 'Method',
    'alogTitleUrl': 'Url',
    'alogTitleStatus': 'Status',
    'alogTitleAccessTime': 'Access Time',
    'alogTitleClientIP': 'Client IP',
    'alogBtnViewBody': 'View Body',
  },
  ...enLocale,
}

export default en
