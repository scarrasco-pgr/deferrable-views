import {
  afterRender,
  Directive,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'mat-chip-set[role="list"]',
  standalone: true,
})
export class A11yChipSetDirective {
  element = inject(ElementRef);
  renderer = inject(Renderer2);
  setA11yRoles = afterRender(() => {
    //[CAUTION] Material can change the underlying DOM view
    const div = this.element?.nativeElement?.querySelector(
      'div[role="presentation"]'
    ) as HTMLDivElement | null;
    const chips = Array.from(
      this.element?.nativeElement?.querySelectorAll('mat-chip')
    ) as HTMLElement[] | null;

    //Needed if Material changes DOM view
    if (div && chips?.length) {
      this.renderer.removeAttribute(div, 'role');
      chips.forEach((c) => this.renderer.setAttribute(c, 'role', 'listitem'));
    }
  });
}
