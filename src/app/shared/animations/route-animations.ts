import {trigger,state,style,animate,transition, query, group}from '@angular/animations';

export const fader =
// trigger name for attaching this animation to an element using the [@triggerName] syntax
trigger('fader', [
    transition('* => *', [
        query(':enter', [
                style({ opacity: 0 })
            ], { optional: true }
        ),
        group([
            query(':leave', [
                    animate(300, style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter', [
                    style({ opacity: 0 }),
                    animate(300, style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])
    ])
]);
