Welcome to Decoupled Blocks

Installation
==========

 - Enable the module and at least one javascript framework sub-module (Angular 2 is the most fleshed out currently)
 - Navigate to a block placement UI (core block UI or Panels, for example)
 - Add a block, and select one of the PDB example components
 - Save your page and the decoupled component will appear!

Writing your own components
==========

 - Writing components for existing frameworks should be straightforward, write them as usual and add an info.yml file
   declaring them to the module.

Writing your own framework definitions
==========

 - By extending the main pdb block and deriver classes and adding a library file, you can craft your own js framework
   definition modules! We would love to see support for other frameworks.
 - For now you can use the existing pdb_ng2 and pdb_react as examples for how to proceed.

Author/Maintainers
======================
- Matt Davis <matt.davis at yourdrupaldev DOT com> http://www.mediacurrent.com

See: https://www.drupal.org/sandbox/mrjmd/2664138