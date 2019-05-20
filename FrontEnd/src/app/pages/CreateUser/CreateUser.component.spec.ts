import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:FrontEnd/src/app/pages/packageList/packageList.component.spec.ts
import { PackageListComponent } from './packageList.component';

describe('PackageListComponent', () => {
  let component: PackageListComponent;
  let fixture: ComponentFixture<PackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageListComponent ]
=======
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
import { CreateUserComponent } from './CreateUser.component';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ]
<<<<<<< HEAD
=======
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff:FrontEnd/src/app/pages/CreateUser/CreateUser.component.spec.ts
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(CreateUserComponent);
=======
<<<<<<< HEAD:FrontEnd/src/app/pages/packageList/packageList.component.spec.ts
    fixture = TestBed.createComponent(PackageListComponent);
=======
    fixture = TestBed.createComponent(CreateUserComponent);
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff:FrontEnd/src/app/pages/CreateUser/CreateUser.component.spec.ts
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
