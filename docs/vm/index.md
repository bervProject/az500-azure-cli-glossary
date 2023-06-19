---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure VM

## Enable Disk Encryption

::: code-group
```bash
az vm encryption enable \
    --resource-group <resource-group> \
    --name <vm-name> \
    --disk-encryption-keyvault <keyvault-name> \
    --volume-type [all | os | data]
```

```powershell
Set-AzVmDiskEncryptionExtension `
	-ResourceGroupName <resource-group> `
  -VMName <vm-name> `
  -VolumeType [All | OS | Data]
	-DiskEncryptionKeyVaultId <keyVault.ResourceId> `
	-DiskEncryptionKeyVaultUrl <keyVault.VaultUri> `
  -SkipVmBackup
```
:::

## View the status of the disk

::: code-group
```bash
az vm encryption show --resource-group <resource-group> --name <vm-name>
```

```powershell
Get-AzVmDiskEncryptionStatus  -ResourceGroupName <resource-group> -VMName <vm-name>
```
:::

## Decrypting drives

::: code-group
```bash
az vm encryption disable --resource-group <resource-group> --name <vm-name>
```

```powershell
Disable-AzVMDiskEncryption -ResourceGroupName <resource-group> -VMName <vm-name>
```
:::

## Run template deployment

::: code-group
```bash
az group deployment create --resource-group <my-resource-group> --name <my-deployment-name> \
    --template-uri https://raw.githubusercontent.com/azure/azure-quickstart-templates/master/201-encrypt-running-windows-vm-without-aad/azuredeploy.json
```

```powershell
New-AzResourceGroupDeployment `
    -Name encrypt-disk `
    -ResourceGroupName <resource-group-name> `
    -TemplateUri https://raw.githubusercontent.com/azure/azure-quickstart-templates/master/201-encrypt-running-windows-vm-without-aad/azuredeploy.json
```
:::