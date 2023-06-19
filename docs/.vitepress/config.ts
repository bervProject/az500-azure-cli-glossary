import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AZ-500 Azure CLI Glossary",
  description: "AZ-500 Azure CLI Glossary",
  base: '/az500-azure-cli-glossary',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Common', items: [
          { text: 'Azure AD', link: '/azuread/' },
          { text: 'Common', link: '/common/' },
          { text: 'Resource Group', link: '/resourcegroup/' }
        ]
      },
      { text: 'Network', link: '/network/' },
      { text: 'VM', link: '/vm/' },
      {
        text: 'Security', items: [
          { text: 'Azure Policy', link: '/policy/' },
          { text: 'Azure RBAC', link: '/azurerbac/' },
          { text: 'Key Vault', link: '/keyvault/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bervProject/az500-azure-cli-glossary' }
    ]
  }
})
