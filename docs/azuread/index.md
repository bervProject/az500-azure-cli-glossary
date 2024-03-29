---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure AD

## Users

### Create User

::: code-group
```bash
# Create User
az ad user create --display-name "<name>" --password "<password>" --user-principal-name <user principalname>
# Verify
az ad user list --output table
```

```powershell
# Create Password Object
$passwordProfile = New-Object -TypeName Microsoft.Open.AzureAD.Model.PasswordProfile
# Fill the password
$passwordProfile.Password = '<password>'
# Make sure always connect to Azure AD
Connect-AzureAD
# (Optional) Getting domain
$domainName = ((Get-AzureAdTenantDetail).VerifiedDomains)[0].Name
# Create Account/User
New-AzureADUser -DisplayName '<name>' -PasswordProfile $passwordProfile -UserPrincipalName "<username>@$domainName" -AccountEnabled $true -MailNickName '<mail nickname>'
# Verify
Get-AzureADUser
```
:::

## Groups

### Create Group

::: code-group
```bash
# Create group
az ad group create --display-name "<group name>" --mail-nickname "<mail nickname>"
# Verify
az ad group list -o table
```

```powershell
# Create Group
New-AzureADGroup -DisplayName '<group name>' -MailEnabled $false -SecurityEnabled $true -MailNickName <mail nickname>
# Verify
Get-AzureADGroup
```
:::

### Add User as Member at a Group

::: code-group
```bash
# Add member to group
az ad group member add --group "<group name>" --member-id <member id>
# Verify
az ad group member list --group "<group name>"
```

```powershell
# Get the user
$user = Get-AzureADUser -Filter "MailNickName eq '<mail nickname>'"
# Add Member
Add-AzADGroupMember -MemberUserPrincipalName $user.userPrincipalName -TargetGroupDisplayName "<group display name>"
# Verify the Member
Get-AzADGroupMember -GroupDisplayName "<group display name>"
```
:::