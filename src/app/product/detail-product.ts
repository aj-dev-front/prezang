import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `{{ params() | json }}`,
    imports: [JsonPipe]
})
export class DetailProduct {
    protected readonly params = toSignal(inject(ActivatedRoute).params, {})
}