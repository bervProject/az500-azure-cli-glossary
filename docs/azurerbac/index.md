---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure RBAC

## Review built-in roles

::: code-group
```bash
az role definition list --name "Virtual Machine Contributor" --output json | jq '.[] | .permissions[0].actions'
```

```powershell
Get-AzRoleDefinition -Name "Virtual Machine Contributor" | Select Actions | ConvertTo-Json
```
:::

## Find resource provider operations

::: code-group
```bash
az provider operation show
```

```powershell
Get-AzProviderOperation */virtualMachines/*
```
:::

## Create Role

::: code-group
```bash
az role definition create --role-definition vm-operator-role.json
```

```powershell
New-AzRoleDefinition -InputFile "vm-operator-role.json"
```
:::

## Update Role

::: code-group
```bash
az role definition update --role-definition "<<path-to-json-file>>"
```

```powershell
Set-AzRoleDefinition -InputFile "<<path-to-json-file>>"
```
:::

## View Custom Role

::: code-group
```bash
az role definition list --custom-role-only true --output json | jq '.[] | {"roleName":.roleName, "roleType":.roleType}'
```

```powershell
Get-AzRoleDefinition | ? {$_.IsCustom -eq $true} | FT Name, IsCustom
```
:::

## View Role Definition

::: code-group
```bash
az role definition list --name "Virtual Machine Operator"
```

```powershell
Get-AzRoleDefinition "Virtual Machine Operator"
```
:::

## View Custom Role Assignment

::: code-group
```bash
az role assignment list --role "Virtual Machine Operator"
```

```powershell
Get-AzRoleAssignment -RoleDefinitionName "Virtual Machine Operator"
```
:::

## Delete Role

::: code-group
```bash
az role definition delete --name "role name"
```

```powershell
Get-AzRoleDefinition "role name" | Remove-AzRoleDefinition
```
:::

## Assign Role

```bash
az role assignment create --assignee "<UPN>" --role "Virtual Machine Operator"
```

## Assign Role 2

::: code-group
```bash
az role assignment create \
    --assignee rbacuser@example.com \
    --role "Owner" \
    --subscription <subscription_name_or_id>
```

```powershell
New-AzRoleAssignment `
    -SignInName rbacuser@example.com `
    -RoleDefinitionName "Owner" `
    -Scope "/subscriptions/<subscriptionID>"
```
:::

## Remove Assignment Role

::: code-group
```bash
az role assignment delete --role "role name"
```

```powershell
Remove-AzRoleAssignment -ObjectId <object_id> -RoleDefinitionName "role name" -Scope /subscriptions/<subscription_id>
```
:::