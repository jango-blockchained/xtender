from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in xtender/__init__.py
from xtender import __version__ as version

setup(
	name="xtender",
	version=version,
	description="Change your batteries into rockets!",
	author="jango_blockchained",
	author_email="info@cryptolinx.de",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
