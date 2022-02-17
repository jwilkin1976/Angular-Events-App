import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AuthService } from "src/app/user/auth.service";
import { SessionListComponent, VoterService } from ".";
import { DurationPipe } from "..";

// Example integration test with required set-up for both deep and shallow feature tests
describe('SessionListComponent', () => {
  // Set up required items
  let mockAuthService,
      mockVoterService,
      fixture: ComponentFixture<SessionListComponent>,
      component: SessionListComponent,
      //element: HTMLElement,
      debugEl: DebugElement

  beforeEach(() => {
    mockAuthService = { isAuthenticated: () => true, currentUser: {userName: 'Joe' }};
    mockVoterService = { userHasVoted: () => true };
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent,
        DurationPipe,
        // Including the following 2 components would make this into a deep feature test
        // CollapsibleWellComponent,
        // UpVoteComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      // use no_errors_schema so that additional component errors are ignored when running as a shallow feature test
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    // element = fixture.nativeElement;
  })

  describe('initial display', () => {

    it('should have the correct name', () => {
      component.sessions = [
        {name: 'Session 1', id: 3, presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['John', 'Bob'], eventId: 4 }
      ]
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();

      fixture.detectChanges();

      // use native element to check value
      //expect(element.querySelector('[well-title]').textContent).toContain('Session 1');

      // use debug element to check value
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  })
})
