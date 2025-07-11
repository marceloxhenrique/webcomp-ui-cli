#!/usr/bin/env node
import fs from "node:fs";
import path from "path";
import process from "process";

import { renderMenu, getUserInput } from "./cli/menu.js";
import { addComponent } from "./cli/component.js";

const CONFIG_PATH = path.join(process.cwd(), ".webcomp-ui.json");
const hasFrameworkConfig = fs.existsSync(CONFIG_PATH);

if (!hasFrameworkConfig) {
  renderMenu();
  getUserInput();
} else {
  addComponent();
}
