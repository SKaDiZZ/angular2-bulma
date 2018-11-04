import { BuDeleteModule } from './bu-delete.module';

describe('BuDeleteModule', () => {
  let buDeleteModule: BuDeleteModule;

  beforeEach(() => {
    buDeleteModule = new BuDeleteModule();
  });

  it('should create an instance', () => {
    expect(buDeleteModule).toBeTruthy();
  });
});
