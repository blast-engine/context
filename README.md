# Context

This is a package to help control different contexts on your node/web application.

## Installation Guide

Run `yarn add @blast-engine/context` or `npm i @blast-engine/context`

## Usage

Run `yarn context:select` to select a previously declared context.

Run `yarn context:current` to see the currently selected context.

Run `yarn context:set [context]` to explicitly set your current context to the specified context name.


## Setting Up Different Contexts

On the root directory of your application, create a file called `contexts.config.js`. In this file, you need to declare your different contexts. Your `contexts.config.js` file should follow this format: 
```javascript
module.exports = () => ({
	onSelect: context => null,
	// after selecting a context using `yarn context:select`,
	// this function will be called with the selected contexts values
	// as a parameter to the function
	contexts: {
		prod: {
			_showInSelect: true, 
			// if set to false, the context will not appear
			// in `yarn context:select`
			yourConfigKeys: {
				apiKey: "apiKey"
			},
			importantEnvParamForContext: "super important"
		},
		dev1: {
			_showInSelect: true,
			yourConfigKeys: {
				apiKey: "apiKey"
			},
			importantEnvParamForContext: "less important"
		}
	}
})
```
After selecting a context, a file called `active-context` will be automatically generated, listing your active context. **Make sure to add `active-context` file to your `.gitignore`**.

To have access to the environment parameters based on different context, you can edit the `onSelect` function such that it would write the specified parameters in the context into a file:
```javascript
onSelect: context => fs.writeFileSync(
	'./__env_config__.json', 
	JSON.stringify(context.yourConfigKeys)
)
```
