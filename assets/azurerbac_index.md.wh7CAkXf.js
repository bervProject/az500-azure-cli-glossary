import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.BBOpV8mv.js";const c=JSON.parse('{"title":"Azure RBAC","description":"","frontmatter":{"sidebar":"auto","footer":"MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama"},"headers":[],"relativePath":"azurerbac/index.md","filePath":"azurerbac/index.md"}'),l={name:"azurerbac/index.md"};function h(n,s,p,d,o,k){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="azure-rbac" tabindex="-1">Azure RBAC <a class="header-anchor" href="#azure-rbac" aria-label="Permalink to &quot;Azure RBAC&quot;">​</a></h1><h2 id="review-built-in-roles" tabindex="-1">Review built-in roles <a class="header-anchor" href="#review-built-in-roles" aria-label="Permalink to &quot;Review built-in roles&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DXA14" id="tab-P8BxhdL" checked><label data-title="bash" for="tab-P8BxhdL">bash</label><input type="radio" name="group-DXA14" id="tab-hyuaRs_"><label data-title="powershell" for="tab-hyuaRs_">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Virtual Machine Contributor&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jq</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.[] | .permissions[0].actions&#39;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AzRoleDefinition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Virtual Machine Contributor&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Select Actions </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ConvertTo-Json</span></span></code></pre></div></div></div><h2 id="find-resource-provider-operations" tabindex="-1">Find resource provider operations <a class="header-anchor" href="#find-resource-provider-operations" aria-label="Permalink to &quot;Find resource provider operations&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-D0bzR" id="tab-VL3inwQ" checked><label data-title="bash" for="tab-VL3inwQ">bash</label><input type="radio" name="group-D0bzR" id="tab-vVnXRss"><label data-title="powershell" for="tab-vVnXRss">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provider</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> operation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AzProviderOperation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">virtualMachines</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/*</span></span></code></pre></div></div></div><h2 id="create-role" tabindex="-1">Create Role <a class="header-anchor" href="#create-role" aria-label="Permalink to &quot;Create Role&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-p4iif" id="tab-p79LU4C" checked><label data-title="bash" for="tab-p79LU4C">bash</label><input type="radio" name="group-p4iif" id="tab-lmnd3mF"><label data-title="powershell" for="tab-lmnd3mF">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --role-definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vm-operator-role.json</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">New-AzRoleDefinition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">InputFile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vm-operator-role.json&quot;</span></span></code></pre></div></div></div><h2 id="update-role" tabindex="-1">Update Role <a class="header-anchor" href="#update-role" aria-label="Permalink to &quot;Update Role&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-k24cQ" id="tab-0zOPb1S" checked><label data-title="bash" for="tab-0zOPb1S">bash</label><input type="radio" name="group-k24cQ" id="tab-k6TAish"><label data-title="powershell" for="tab-k6TAish">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --role-definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;&lt;path-to-json-file&gt;&gt;&quot;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Set-AzRoleDefinition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">InputFile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;&lt;path-to-json-file&gt;&gt;&quot;</span></span></code></pre></div></div></div><h2 id="view-custom-role" tabindex="-1">View Custom Role <a class="header-anchor" href="#view-custom-role" aria-label="Permalink to &quot;View Custom Role&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ctYCO" id="tab-H0pfd04" checked><label data-title="bash" for="tab-H0pfd04">bash</label><input type="radio" name="group-ctYCO" id="tab-1BgSyZV"><label data-title="powershell" for="tab-1BgSyZV">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --custom-role-only</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jq</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.[] | {&quot;roleName&quot;:.roleName, &quot;roleType&quot;:.roleType}&#39;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AzRoleDefinition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.IsCustom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FT Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IsCustom</span></span></code></pre></div></div></div><h2 id="view-role-definition" tabindex="-1">View Role Definition <a class="header-anchor" href="#view-role-definition" aria-label="Permalink to &quot;View Role Definition&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-v3Rgb" id="tab-ITR-DFu" checked><label data-title="bash" for="tab-ITR-DFu">bash</label><input type="radio" name="group-v3Rgb" id="tab-O_-NcuI"><label data-title="powershell" for="tab-O_-NcuI">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Virtual Machine Operator&quot;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AzRoleDefinition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Virtual Machine Operator&quot;</span></span></code></pre></div></div></div><h2 id="view-custom-role-assignment" tabindex="-1">View Custom Role Assignment <a class="header-anchor" href="#view-custom-role-assignment" aria-label="Permalink to &quot;View Custom Role Assignment&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0kT19" id="tab-CqIjYA1" checked><label data-title="bash" for="tab-CqIjYA1">bash</label><input type="radio" name="group-0kT19" id="tab-gnbs84E"><label data-title="powershell" for="tab-gnbs84E">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assignment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Virtual Machine Operator&quot;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AzRoleAssignment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RoleDefinitionName </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Virtual Machine Operator&quot;</span></span></code></pre></div></div></div><h2 id="delete-role" tabindex="-1">Delete Role <a class="header-anchor" href="#delete-role" aria-label="Permalink to &quot;Delete Role&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_P2zd" id="tab-88kRAMG" checked><label data-title="bash" for="tab-88kRAMG">bash</label><input type="radio" name="group-_P2zd" id="tab-t0n3Rka"><label data-title="powershell" for="tab-t0n3Rka">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> definition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;role name&quot;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Get-AzRoleDefinition</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;role name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Remove-AzRoleDefinition</span></span></code></pre></div></div></div><h2 id="assign-role" tabindex="-1">Assign Role <a class="header-anchor" href="#assign-role" aria-label="Permalink to &quot;Assign Role&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assignment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --assignee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;UPN&gt;&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Virtual Machine Operator&quot;</span></span></code></pre></div><h2 id="assign-role-2" tabindex="-1">Assign Role 2 <a class="header-anchor" href="#assign-role-2" aria-label="Permalink to &quot;Assign Role 2&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-YIPIl" id="tab-pNpSAFn" checked><label data-title="bash" for="tab-pNpSAFn">bash</label><input type="radio" name="group-YIPIl" id="tab-wjhHJfd"><label data-title="powershell" for="tab-wjhHJfd">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assignment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --assignee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rbacuser@example.com</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Owner&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --subscription</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">subscription_name_or_i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">New-AzRoleAssignment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> \`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SignInName rbacuser@example.com </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RoleDefinitionName </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Owner&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> \`</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Scope </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/subscriptions/&lt;subscriptionID&gt;&quot;</span></span></code></pre></div></div></div><h2 id="remove-assignment-role" tabindex="-1">Remove Assignment Role <a class="header-anchor" href="#remove-assignment-role" aria-label="Permalink to &quot;Remove Assignment Role&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R2QyG" id="tab-548DN8l" checked><label data-title="bash" for="tab-548DN8l">bash</label><input type="radio" name="group-R2QyG" id="tab-fM_WDYS"><label data-title="powershell" for="tab-fM_WDYS">powershell</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">az</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assignment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --role</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;role name&quot;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Remove-AzRoleAssignment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ObjectId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">object_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RoleDefinitionName </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;role name&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Scope </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subscriptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subscription_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div></div></div>`,23)]))}const g=i(l,[["render",h]]);export{c as __pageData,g as default};