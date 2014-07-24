This is an experiment to see if overriding mixins works well as an OOP method in  js.

for example

instead of class Foo {}

function Foo(){}
extends Bar() {}

but the methods are
written as object literals, and we can have an override keyword...


side thought -- can we do constraits here? interfaces or protocols?


## todo: downcasting -- thinking the 'actual' type can be stored somewhere, and when we try 
to downcast we can check. Possibly we can store location in hierarchy using base/A/B or something 
to see if cast is valid from where we are.

## todo: generics? I wonder if anyone has attempted this in js?
