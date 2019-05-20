import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:FrontEnd/src/app/pages/packageList/packageList.component.spec.ts
import { PackageListComponent } from './packageList.component';

describe('PackageDetailComponent', () => {
  let component: PackageListComponent;
  let fixture: ComponentFixture<PackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageListComponent ]
=======
import { CreateUserComponent } from './CreateUser.component';

describe('CreatePackageComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ]
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff:FrontEnd/src/app/pages/CreateUser/CreateUser.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:FrontEnd/src/app/pages/packageList/packageList.component.spec.ts
    fixture = TestBed.createComponent(PackageListComponent);
=======
    fixture = TestBed.createComponent(CreateUserComponent);
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff:FrontEnd/src/app/pages/CreateUser/CreateUser.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
