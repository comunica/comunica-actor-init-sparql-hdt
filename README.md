# Comunica SPARQL HDT Init Actor

[![Build Status](https://travis-ci.org/comunica/comunica-actor-init-sparql-hdt.svg?branch=master)](https://travis-ci.org/comunica/comunica-actor-init-sparql-hdt)
[![npm version](https://badge.fury.io/js/%40comunica%2Factor-init-sparql-hdt.svg)](https://www.npmjs.com/package/@comunica/actor-init-sparql-hdt) [![Greenkeeper badge](https://badges.greenkeeper.io/comunica/comunica-actor-init-sparql-hdt.svg)](https://greenkeeper.io/)

A comunica SPARQL [HDT](http://www.rdfhdt.org/) Init Actor.

This module is part of the [Comunica framework](https://github.com/comunica/comunica).

## Install

OSTRICH requires GCC 4.9 or higher to be available so that [HDT](http://www.rdfhdt.org/) can be compiled.

```bash
$ yarn add @comunica/actor-init-sparql-hdt
```

## Usage

Show 100 triples from a HDT file:

```bash
$ comunica-sparql-hdt hdtFile@myfile.hdt "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"
```

Show the help with all options:

```bash
$ comunica-sparql-hdt --help
```
