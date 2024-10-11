import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { By } from '@angular/platform-browser';
import { A11yChipSetDirective } from './a11y.directive';

describe(`A11yChipSetDirective`, () => {
  it(`should apply role attribute for all material chips`, async () => {
    const { debugElement } = init();
    const chips = debugElement.queryAll(By.directive(MatChip));
    const allChipsHaveRoleAttr = chips.every(
      (c) => c.attributes['role'] === 'listitem'
    );
    expect(allChipsHaveRoleAttr).toBeTrue();
  });
});

function init() {
  @Component({
    standalone: true,
    imports: [A11yChipSetDirective, MatChipsModule],
    template: `
      <mat-chip-set role="list">
        @for(c of chips; track c) {<mat-chip>{{ c }}</mat-chip
        >}
      </mat-chip-set>
    `,
  })
  class TestHost {
    chips = ['Chip 1', 'Chip 2', 'Chip 3'];
  }
  const fixture = TestBed.createComponent(TestHost);
  const debugElement = fixture.debugElement;
  fixture.detectChanges();
  return { debugElement };
}
