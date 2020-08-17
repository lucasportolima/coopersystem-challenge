import { SessionStorageService } from "./session-storage.service";

describe("The SessionStorageService", () => {
  let sessionStorageService;
  let item;

  beforeEach(() => {
    sessionStorageService = new SessionStorageService();
    item = {
      name: 'test'
    };
  });

  it('should create', () => {
    expect(sessionStorageService).toBeTruthy();
  });

  it("remove item", () => {
    sessionStorageService.set('item', item);
    expect(sessionStorageService.remove('item')).toBeFalsy();
  });

  it("get and set item", () => {
    sessionStorageService.set('item', item);
    expect(sessionStorageService.get('item')).toEqual(item);
  });

  afterEach(() => {
    localStorage.clear();
  })
});