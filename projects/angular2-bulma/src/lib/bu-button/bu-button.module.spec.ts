import { BuButtonModule } from './bu-button.module';

describe('BuButtonModule', () => {
  let buButtonModule: BuButtonModule;

  beforeEach(() => {
    buButtonModule = new BuButtonModule();
  });

  it('should create an instance', () => {
    expect(buButtonModule).toBeTruthy();
  });
});
