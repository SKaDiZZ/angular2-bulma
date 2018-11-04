import { BuMessageModule } from './bu-message.module';

describe('BuMessageModule', () => {
  let buMessageModule: BuMessageModule;

  beforeEach(() => {
    buMessageModule = new BuMessageModule();
  });

  it('should create an instance', () => {
    expect(buMessageModule).toBeTruthy();
  });
});
