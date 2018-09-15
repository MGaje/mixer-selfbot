import { MixerSelfbot } from "./core/MixerSelfbot";
import { IRunnable } from "./core/IRunnable";

const bot: IRunnable = new MixerSelfbot();
bot.run();
