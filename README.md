[release]:       https://github.com/ocadotechnology/pass4s/releases/latest
[release-badge]: https://img.shields.io/github/release/ocadotechnology/pass4s.svg

# Pass4s

![icon](./icon/icon-200.png)

## About

Pass4s is a Scala library providing an abstract layer for cross app messaging. It provides implementations for platforms like AWS SQS/SNS and ActiveMQ.

[release]:       https://github.com/ocadotechnology/pass4s/releases/latest
[release-badge]: https://img.shields.io/github/release/ocadotechnology/pass4s.svg

## Example

See `./demo` project for usage examples.

## Documentation

Visit the documentation at https://ocadotechnology.github.io/pass4s.

## Dependencies

The latest release is: [![release-badge][]][release]

```
// Algebraic abstractions (Sender/Consumer)
"com.ocadotechnology" %% "pass4s-kernel" % version,

// Message, Destination, CommittableMessage, Connector
"com.ocadotechnology" %% "pass4s-core" % version,

// Broker
"com.ocadotechnology" %% "pass4s-high" % version,

// circe JSON senders/consumers
"com.ocadotechnology" %% "pass4s-circe" % version,

// phobos XML senders/consumers
"com.ocadotechnology" %% "pass4s-phobos" % version,

// logging middleware
"com.ocadotechnology" %% "pass4s-logging" % version,

// high-level MessageProcessor
"com.ocadotechnology" %% "pass4s-extra" % version,

// ActiveMQ connector
"com.ocadotechnology" %% "pass4s-connector-activemq" % version
```

## Contributing

Feel free to submit feature requests and bug reports under Issues.

When making pull requests, make sure to run `prePR` to format the files and adjust headers.

## License

pass4s is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this software except in compliance with the License.

Copyright © 2022 Ocado
