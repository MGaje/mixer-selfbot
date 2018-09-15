import { IRunnable } from "./IRunnable";

export class MixerSelfbot implements IRunnable
{
    public async run(): Promise<void>
    {
        try
        {
            console.log("Running!");
        }
        catch(e)
        {
            console.error(e);
        }
    }
}