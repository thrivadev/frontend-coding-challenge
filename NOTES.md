# Notes

## Config
Notes on config files I've added.

#### Adding .nvmrc

I highly recommend using nvm to manage/switch between versions of Node as a general rule.  This config file lets us specify
a version range that a developer should be running within the project. Run `nvm install` to easily install the correct
version.  It's important to keep devs using generally the same version of Node in order to avoid issues with package-lock.json
as well as modules that are version-dependent.
