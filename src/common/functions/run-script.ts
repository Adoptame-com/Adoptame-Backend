import { INestApplicationContext } from '@nestjs/common';
import { LoggerService } from '@src/modules/logger/logger.service';

export async function runScript(app: INestApplicationContext) {
  const loggerService = app.get(LoggerService);
  const [, , scriptArg] = process.argv;
  if (scriptArg?.startsWith('script=')) {
    const scriptName = scriptArg.split('=')[1];
    loggerService.info(`Running script ${scriptName}...`, 'SYSTEM', 'INIT');
    await (await import(`../../scripts/${scriptName}.script`)).default(app);
    loggerService.info(`Script ${scriptName} executed.`, 'SYSTEM', 'INIT');
    process.exit(0);
  }
}
