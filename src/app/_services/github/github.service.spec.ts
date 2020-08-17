import { GithubService } from "./github.service";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('The GithubService', () => {
  let username: string = 'lucasportolima';
  let page: number = 1;
  let service: GithubService;
  let httpMock: HttpTestingController;
  let mock: any = { login: username };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    service = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  })

  it('get user', fakeAsync(() => {
    service.getUser(username).subscribe(res => {
      expect(res).toEqual(mock);
    })

    const request = httpMock.expectOne(req => {
      return req.method === "GET"
    });

    request.flush(mock);

    tick();
  }))

  it('get repositorys list', fakeAsync(() => {
    service.listFromUserPaginated(username, page).subscribe(res => {
      expect(res.length).toBe(6);
    })

    const request = httpMock.expectOne(req => {
      return req.method === "GET"
    });

    request.flush([{}, {}, {}, {}, {}, {}]);

    tick();
  }))
});