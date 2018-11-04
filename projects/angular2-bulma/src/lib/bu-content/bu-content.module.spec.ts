import { BuContentModule } from './bu-content.module';

describe('BuContentModule', () => {
  let buContentModule: BuContentModule;

  beforeEach(() => {
    buContentModule = new BuContentModule();
  });

  it('should create an instance', () => {
    expect(buContentModule).toBeTruthy();
  });
});
