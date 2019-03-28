# Comunica SPARQL HDT Init Actor

[![Build Status](https://travis-ci.org/comunica/comunica-actor-init-sparql-hdt.svg?branch=master)](https://travis-ci.org/comunica/comunica-actor-init-sparql-hdt)
[![npm version](https://badge.fury.io/js/%40comunica%2Factor-init-sparql-hdt.svg)](https://www.npmjs.com/package/@comunica/actor-init-sparql-hdt) [![Greenkeeper badge](https://badges.greenkeeper.io/comunica/comunica-actor-init-sparql-hdt.svg)](https://greenkeeper.io/)

A comunica SPARQL [HDT](http://www.rdfhdt.org/) Init Actor.

This module is part of the [Comunica framework](https://github.com/comunica/comunica).

## Install

HDT requires GCC 4.9 or higher to be available.

```bash
$ yarn add @comunica/actor-init-sparql-hdt
```

## Usage from the command line

Show 100 triples from a HDT file:

```bash
$ comunica-sparql-hdt hdtFile@myfile.hdt "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"
```

Show the help with all options:

```bash
$ comunica-sparql-hdt --help
```

Just like [Comunica SPARQL](https://github.com/comunica/comunica/tree/master/packages/actor-init-sparql),
a [dynamic variant](https://github.com/comunica/comunica/tree/master/packages/actor-init-sparql#usage-from-the-command-line) (`comunica-dynamic-sparql-hdt`) also exists.

### Usage as a SPARQL endpoint

Start a webservice exposing http://fragments.dbpedia.org/2015-10/en via the SPARQL protocol, i.e., a _SPARQL endpoint_.

```bash
$ comunica-sparql-hdt-http "{ \"sources\": [{ \"type\": \"file\", \"value\" : \"/path/to/my/file.hdt" }]}"
```

Show the help with all options:

```bash
$ comunica-sparql-hdt-http --help
```

The SPARQL endpoint can only be started dynamically.
An alternative config file can be passed via the `COMUNICA_CONFIG` environment variable.

Use `bin/http.js` when running in the GitHub repo.
