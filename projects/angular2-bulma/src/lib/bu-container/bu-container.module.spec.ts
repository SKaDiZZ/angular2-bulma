import { BuContainerModule } from './bu-container.module';

describe('BuContainerModule', () => {
  let buContainerModule: BuContainerModule;

  beforeEach(() => {
    buContainerModule = new BuContainerModule();
  });

  it('should create an instance', () => {
    expect(buContainerModule).toBeTruthy();
  });
});
