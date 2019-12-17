'use strict';

const core = require('./core-b512de12.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["hv-button.cjs",[[0,"hv-button",{"label":[1],"icon":[1]}]]],["hv-input-text.cjs",[[4,"hv-input-text",{"elementId":[1,"id"],"optional":[4],"required":[4],"value":[513],"name":[1],"label":[1],"placeholder":[1],"description":[1],"dirty":[32],"errorMessage":[32],"error":[32]}]]]], options);
});
