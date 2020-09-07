import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../../.env" });

import { Telegraf } from "telegraf";

export const bot = new Telegraf(process.env.BOT_TOKEN as string);
