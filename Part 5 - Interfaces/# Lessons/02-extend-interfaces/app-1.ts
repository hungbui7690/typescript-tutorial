/*
  Extend Interfaces

*/

// Interfaces extending one interface

// Suppose that you have an interface called Mailable that contains two methods called send() and queue() as follows:
interface Mailable {
  send(email: string): boolean
  queue(email: string): boolean
}

/*
  And you have many classes that already implemented the Mailable interface.

  Now, you want to add a new method to the Mailable interface that sends an email later like this:

    later(email: string, after: number): void

  However, adding the later() method to the Mailable interface would break the current code.
*/

// To avoid this, you can create a new interface that extends the Mailable interface:
interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean
}

/*
  To extend an interface, you use the extends keyword with the following syntax:

    interface A {
        a(): void
    }

    interface B extends A {
        b(): void
    }

  The interface B extends the interface A, which then has both methods a() and b() .

  Like classes, the FutureMailable interface inherits the send() and queue() methods from the Mailable interface.
*/

// The following shows how to implement the FutureMailable interface:
class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`)
    return true
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email}`)
    return true
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`)
    return true
  }
}
