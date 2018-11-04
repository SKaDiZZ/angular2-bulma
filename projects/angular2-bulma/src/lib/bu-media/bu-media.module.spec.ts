import { BuMediaModule } from './bu-media.module';

describe('BuMediaModule', () => {
  let buMediaModule: BuMediaModule;

  beforeEach(() => {
    buMediaModule = new BuMediaModule();
  });

  it('should create an instance', () => {
    expect(buMediaModule).toBeTruthy();
  });
});
