# Feelpp Toolbox Fluid

Feel++ is an Open-Source C++ library which allows to solve a large range of partial differential equations using Galerkin methods,
e.g finite element method, spectral element method, discontinuous Galerkin methods or reduced basis methods. Feel++ enables
parallel computing in a seamless way and allows to solve large scale systems up to tens of thousands of cores.

This modules let you generate files required to run Feelpp Computational Fluid Dynamics(CFD) toolbox.
See the docs for mode details.

## Simput Integration

## Running Simput

### Running interactively

docker run -p 49170:8080 -d --name simput hifimagnet/simput
firefox --private-window http://localhost:49170
docker stop simput