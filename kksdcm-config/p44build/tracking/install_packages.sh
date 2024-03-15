# Run this script to install all packages that were installed at the time of p44b save
./scripts/feeds update onion
echo 'checking packages from gpio-test'
./scripts/feeds install -p onion gpio-test
echo 'checking packages from omega2-ctrl'
./scripts/feeds install -p onion omega2-ctrl
./scripts/feeds update p44i
echo 'checking packages from alix-flashbox-config'
./scripts/feeds install -p p44i alix-flashbox-config
echo 'checking packages from ds-vdc'
./scripts/feeds install -p p44i ds-vdc
echo 'checking packages from mg44'
./scripts/feeds install -p p44i mg44
echo 'checking packages from p44-extdev-cecbutton'
./scripts/feeds install -p p44i p44-extdev-cecbutton
echo 'checking packages from p44-extdev-htscreen'
./scripts/feeds install -p p44i p44-extdev-htscreen
echo 'checking packages from p44-maint-keys'
./scripts/feeds install -p p44i p44-maint-keys
echo 'checking packages from p44dbr'
./scripts/feeds install -p p44i kmod-p44dbr
echo 'checking packages from p44dsb-config'
./scripts/feeds install -p p44i p44dsb-config
echo 'checking packages from p44dsb-webui'
./scripts/feeds install -p p44i p44dsb-webui
echo 'checking packages from p44lc-config'
./scripts/feeds install -p p44i p44lc-config
echo 'checking packages from p44lc-webui'
./scripts/feeds install -p p44i p44lc-webui
echo 'checking packages from p44maintd'
./scripts/feeds install -p p44i p44maintd
echo 'checking packages from p44mbc-config'
./scripts/feeds install -p p44i p44mbc-config
echo 'checking packages from p44mbcd'
./scripts/feeds install -p p44i p44mbcd
#./scripts/feeds install -p p44i p44mbutil
echo 'checking packages from p44mbrd'
./scripts/feeds install -p p44i p44mbrd
echo 'checking packages from serialfwd'
./scripts/feeds install -p p44i serialfwd
echo 'checking packages from sqfloatswapper'
./scripts/feeds install -p p44i sqfloatswapper
echo 'checking packages from vdcd'
./scripts/feeds install -p p44i vdcd
echo 'checking packages from vdsm'
./scripts/feeds install -p p44i vdsm
./scripts/feeds update packages
echo 'checking packages from aircrack-ng'
./scripts/feeds install -p packages aircrack-ng
#./scripts/feeds install -p packages airmon-ng
echo 'checking packages from alsa-lib'
./scripts/feeds install -p packages alsa-lib
#./scripts/feeds install -p packages aserver
echo 'checking packages from alsa-ucm-conf'
./scripts/feeds install -p packages alsa-ucm-conf
echo 'checking packages from alsa-utils'
./scripts/feeds install -p packages alsa-utils
#./scripts/feeds install -p packages alsa-utils-seq
#./scripts/feeds install -p packages alsa-utils-tests
echo 'checking packages from attr'
./scripts/feeds install -p packages attr
#./scripts/feeds install -p packages libattr
echo 'checking packages from avahi'
./scripts/feeds install -p packages libavahi-client
#./scripts/feeds install -p packages libavahi-compat-libdnssd
#./scripts/feeds install -p packages avahi-utils
#./scripts/feeds install -p packages libavahi-dbus-support
#./scripts/feeds install -p packages libavahi-nodbus-support
#./scripts/feeds install -p packages avahi-autoipd
#./scripts/feeds install -p packages avahi-dbus-daemon
#./scripts/feeds install -p packages avahi-nodbus-daemon
#./scripts/feeds install -p packages avahi-daemon-service-http
#./scripts/feeds install -p packages avahi-daemon-service-ssh
#./scripts/feeds install -p packages avahi-dnsconfd
echo 'checking packages from bash'
./scripts/feeds install -p packages bash
echo 'checking packages from bluez'
./scripts/feeds install -p packages bluez-libs
#./scripts/feeds install -p packages bluez-utils
#./scripts/feeds install -p packages bluez-utils-extra
#./scripts/feeds install -p packages bluez-daemon
echo 'checking packages from boost'
./scripts/feeds install -p packages boost-atomic
#./scripts/feeds install -p packages boost-chrono
#./scripts/feeds install -p packages boost-container
#./scripts/feeds install -p packages boost-context
#./scripts/feeds install -p packages boost-contract
#./scripts/feeds install -p packages boost-coroutine
#./scripts/feeds install -p packages boost-date_time
#./scripts/feeds install -p packages boost-fiber
#./scripts/feeds install -p packages boost-filesystem
#./scripts/feeds install -p packages boost-graph
#./scripts/feeds install -p packages boost-iostreams
#./scripts/feeds install -p packages boost-json
#./scripts/feeds install -p packages boost-locale
#./scripts/feeds install -p packages boost-log
#./scripts/feeds install -p packages boost-math
#./scripts/feeds install -p packages boost-nowide
#./scripts/feeds install -p packages boost-program_options
#./scripts/feeds install -p packages boost-python3
#./scripts/feeds install -p packages boost-random
#./scripts/feeds install -p packages boost-regex
#./scripts/feeds install -p packages boost-serialization
#./scripts/feeds install -p packages boost-wserialization
#./scripts/feeds install -p packages boost-stacktrace
#./scripts/feeds install -p packages boost-system
#./scripts/feeds install -p packages boost-thread
#./scripts/feeds install -p packages boost-timer
#./scripts/feeds install -p packages boost-type_erasure
#./scripts/feeds install -p packages boost-wave
#./scripts/feeds install -p packages boost-test
#./scripts/feeds install -p packages boost-libs
#./scripts/feeds install -p packages boost
echo 'checking packages from c-ares'
./scripts/feeds install -p packages libcares
echo 'checking packages from cjson'
./scripts/feeds install -p packages cJSON
echo 'checking packages from confuse'
./scripts/feeds install -p packages confuse
echo 'checking packages from curl'
./scripts/feeds install -p packages libcurl
#./scripts/feeds install -p packages curl
echo 'checking packages from cyrus-sasl'
./scripts/feeds install -p packages libsasl2
#./scripts/feeds install -p packages libsasl2-sasldb
echo 'checking packages from db47'
./scripts/feeds install -p packages libdb47
#./scripts/feeds install -p packages libdb47xx
echo 'checking packages from dbus'
./scripts/feeds install -p packages libdbus
#./scripts/feeds install -p packages dbus
#./scripts/feeds install -p packages dbus-utils
echo 'checking packages from etherwake'
./scripts/feeds install -p packages etherwake
echo 'checking packages from expat'
./scripts/feeds install -p packages libexpat
echo 'checking packages from freetype'
./scripts/feeds install -p packages libfreetype
echo 'checking packages from gdbm'
./scripts/feeds install -p packages libgdbm
echo 'checking packages from glib2'
./scripts/feeds install -p packages glib2
echo 'checking packages from gnutls'
./scripts/feeds install -p packages certtool
#./scripts/feeds install -p packages gnutls-utils
#./scripts/feeds install -p packages libgnutls
#./scripts/feeds install -p packages libgnutls-dane
echo 'checking packages from gptfdisk'
./scripts/feeds install -p packages gdisk
#./scripts/feeds install -p packages cgdisk
#./scripts/feeds install -p packages sgdisk
#./scripts/feeds install -p packages fixparts
echo 'checking packages from hwdata'
./scripts/feeds install -p packages pciids
#./scripts/feeds install -p packages usbids
echo 'checking packages from hwloc'
./scripts/feeds install -p packages hwloc-utils
#./scripts/feeds install -p packages libhwloc
echo 'checking packages from i2c-tools'
./scripts/feeds install -p packages libi2c
#./scripts/feeds install -p packages i2c-tools
#./scripts/feeds install -p packages python3-smbus
echo 'checking packages from icu'
./scripts/feeds install -p packages icu
#./scripts/feeds install -p packages icu-full-data
#./scripts/feeds install -p packages icu-data-tools
echo 'checking packages from intltool'
./scripts/feeds install -p packages intltool
echo 'checking packages from iperf3'
./scripts/feeds install -p packages iperf3
#./scripts/feeds install -p packages iperf3-ssl
echo 'checking packages from kmod'
./scripts/feeds install -p packages kmod
#./scripts/feeds install -p packages libkmod
echo 'checking packages from krb5'
./scripts/feeds install -p packages krb5-libs
#./scripts/feeds install -p packages krb5-server
#./scripts/feeds install -p packages krb5-server-extras
#./scripts/feeds install -p packages krb5-client
echo 'checking packages from libaio'
./scripts/feeds install -p packages libaio
echo 'checking packages from libcbor'
./scripts/feeds install -p packages libcbor
echo 'checking packages from libdaemon'
./scripts/feeds install -p packages libdaemon
echo 'checking packages from libedit'
./scripts/feeds install -p packages libedit
echo 'checking packages from libev'
./scripts/feeds install -p packages libev
echo 'checking packages from libevdev'
./scripts/feeds install -p packages libevdev
echo 'checking packages from libffi'
./scripts/feeds install -p packages libffi
echo 'checking packages from libfido2'
./scripts/feeds install -p packages libfido2
echo 'checking packages from libftdi1'
./scripts/feeds install -p packages libftdi1
#./scripts/feeds install -p packages ftdi_eeprom
echo 'checking packages from libgcrypt'
./scripts/feeds install -p packages libgcrypt
echo 'checking packages from libgpg-error'
./scripts/feeds install -p packages libgpg-error
echo 'checking packages from libgpiod'
./scripts/feeds install -p packages libgpiod
#./scripts/feeds install -p packages gpiod-tools
#./scripts/feeds install -p packages python3-gpiod
echo 'checking packages from libhttp-parser'
./scripts/feeds install -p packages libhttp-parser
echo 'checking packages from libical'
./scripts/feeds install -p packages libical
echo 'checking packages from libid3tag'
./scripts/feeds install -p packages libid3tag
echo 'checking packages from libidn2'
./scripts/feeds install -p packages idn2
#./scripts/feeds install -p packages libidn2
echo 'checking packages from libimobiledevice'
./scripts/feeds install -p packages libimobiledevice
#./scripts/feeds install -p packages libimobiledevice-utils
echo 'checking packages from libjpeg-turbo'
./scripts/feeds install -p packages libjpeg-turbo
#./scripts/feeds install -p packages libjpeg-turbo-utils
echo 'checking packages from liblo'
./scripts/feeds install -p packages liblo
#./scripts/feeds install -p packages liblo-utils
echo 'checking packages from libmad'
./scripts/feeds install -p packages libmad
echo 'checking packages from libmariadb'
./scripts/feeds install -p packages libmariadb
#./scripts/feeds install -p packages libmariadb-plugin-auth-gssapi-client
#./scripts/feeds install -p packages libmariadb-plugin-remote-io
echo 'checking packages from libmcrypt'
./scripts/feeds install -p packages libmcrypt
echo 'checking packages from libmicrohttpd'
./scripts/feeds install -p packages libmicrohttpd-no-ssl
#./scripts/feeds install -p packages libmicrohttpd-ssl
echo 'checking packages from libmodbus'
./scripts/feeds install -p packages libmodbus
echo 'checking packages from libpam'
./scripts/feeds install -p packages libpam
echo 'checking packages from libpciaccess'
./scripts/feeds install -p packages libpciaccess
echo 'checking packages from libplist'
./scripts/feeds install -p packages libplist
#./scripts/feeds install -p packages plistutil
echo 'checking packages from libpng'
./scripts/feeds install -p packages libpng
echo 'checking packages from libsodium'
./scripts/feeds install -p packages libsodium
echo 'checking packages from libssh2'
./scripts/feeds install -p packages libssh2
echo 'checking packages from libtasn1'
./scripts/feeds install -p packages libtasn1
echo 'checking packages from libtirpc'
./scripts/feeds install -p packages libtirpc
echo 'checking packages from libudev-zero'
./scripts/feeds install -p packages libudev-zero
echo 'checking packages from libunistring'
./scripts/feeds install -p packages libunistring
echo 'checking packages from libupnp'
./scripts/feeds install -p packages libupnp
#./scripts/feeds install -p packages libupnp-sample
echo 'checking packages from liburing'
./scripts/feeds install -p packages liburing
echo 'checking packages from libusbmuxd'
./scripts/feeds install -p packages libusbmuxd
#./scripts/feeds install -p packages libusbmuxd-utils
echo 'checking packages from libuv'
./scripts/feeds install -p packages libuv
echo 'checking packages from libuwsc'
./scripts/feeds install -p packages libuwsc-openssl
#./scripts/feeds install -p packages libuwsc-wolfssl
#./scripts/feeds install -p packages libuwsc-mbedtls
#./scripts/feeds install -p packages libuwsc-nossl
echo 'checking packages from libv4l'
./scripts/feeds install -p packages libv4l
#./scripts/feeds install -p packages v4l-utils
echo 'checking packages from libwebsockets'
./scripts/feeds install -p packages libwebsockets-openssl
#./scripts/feeds install -p packages libwebsockets-mbedtls
#./scripts/feeds install -p packages libwebsockets-full
echo 'checking packages from libxml2'
./scripts/feeds install -p packages libxml2
#./scripts/feeds install -p packages libxml2-dev
#./scripts/feeds install -p packages libxml2-utils
echo 'checking packages from lzo'
./scripts/feeds install -p packages liblzo
echo 'checking packages from madplay'
./scripts/feeds install -p packages madplay
echo 'checking packages from mariadb'
./scripts/feeds install -p packages mariadb-client
#./scripts/feeds install -p packages mariadb-client-extra
#./scripts/feeds install -p packages mariadb-server
#./scripts/feeds install -p packages mariadb-server-base
#./scripts/feeds install -p packages mariadb-server-extra
#./scripts/feeds install -p packages mariadb-server-plugin-auth-ed25519
#./scripts/feeds install -p packages mariadb-server-plugin-auth-gssapi
#./scripts/feeds install -p packages mariadb-server-plugin-auth-pam
#./scripts/feeds install -p packages mariadb-server-plugin-auth-pam-v1
#./scripts/feeds install -p packages mariadb-server-plugin-disks
#./scripts/feeds install -p packages mariadb-server-plugin-feedback
#./scripts/feeds install -p packages mariadb-server-plugin-file-key-management
#./scripts/feeds install -p packages mariadb-server-plugin-ha-archive
#./scripts/feeds install -p packages mariadb-server-plugin-ha-blackhole
#./scripts/feeds install -p packages mariadb-server-plugin-ha-connect
#./scripts/feeds install -p packages mariadb-server-plugin-ha-federated
#./scripts/feeds install -p packages mariadb-server-plugin-ha-federatedx
#./scripts/feeds install -p packages mariadb-server-plugin-ha-sphinx
#./scripts/feeds install -p packages mariadb-server-plugin-ha-spider
#./scripts/feeds install -p packages mariadb-server-plugin-handlersocket
#./scripts/feeds install -p packages mariadb-server-plugin-locales
#./scripts/feeds install -p packages mariadb-server-plugin-metadata-lock-info
#./scripts/feeds install -p packages mariadb-server-plugin-query-cache-info
#./scripts/feeds install -p packages mariadb-server-plugin-query-response-time
#./scripts/feeds install -p packages mariadb-server-plugin-server-audit
#./scripts/feeds install -p packages mariadb-server-plugin-simple-password-check
#./scripts/feeds install -p packages mariadb-server-plugin-sql-errlog
#./scripts/feeds install -p packages mariadb-server-plugin-wsrep-info
echo 'checking packages from mc'
./scripts/feeds install -p packages mc
#./scripts/feeds install -p packages mc-skins
echo 'checking packages from mjpg-streamer'
./scripts/feeds install -p packages mjpg-streamer
#./scripts/feeds install -p packages mjpg-streamer-input-file
#./scripts/feeds install -p packages mjpg-streamer-input-uvc
#./scripts/feeds install -p packages mjpg-streamer-input-http
#./scripts/feeds install -p packages mjpg-streamer-output-rtsp
#./scripts/feeds install -p packages mjpg-streamer-output-file
#./scripts/feeds install -p packages mjpg-streamer-output-http
#./scripts/feeds install -p packages mjpg-streamer-output-zmq
#./scripts/feeds install -p packages mjpg-streamer-www
#./scripts/feeds install -p packages mjpg-streamer-www-simple
echo 'checking packages from mosquitto'
./scripts/feeds install -p packages mosquitto-ssl
#./scripts/feeds install -p packages mosquitto-nossl
#./scripts/feeds install -p packages libmosquitto-ssl
#./scripts/feeds install -p packages libmosquitto-nossl
#./scripts/feeds install -p packages libmosquittopp
#./scripts/feeds install -p packages mosquitto-client-ssl
#./scripts/feeds install -p packages mosquitto-client-nossl
echo 'checking packages from net-snmp'
./scripts/feeds install -p packages libnetsnmp
#./scripts/feeds install -p packages snmp-mibs
#./scripts/feeds install -p packages snmp-utils
#./scripts/feeds install -p packages snmpd
#./scripts/feeds install -p packages snmpd-static
#./scripts/feeds install -p packages snmptrapd
echo 'checking packages from netdata'
./scripts/feeds install -p packages netdata
echo 'checking packages from nghttp2'
./scripts/feeds install -p packages libnghttp2
echo 'checking packages from nmap'
./scripts/feeds install -p packages nmap
#./scripts/feeds install -p packages nmap-ssl
#./scripts/feeds install -p packages nmap-full
#./scripts/feeds install -p packages ncat
#./scripts/feeds install -p packages ncat-ssl
#./scripts/feeds install -p packages ncat-full
#./scripts/feeds install -p packages nping
#./scripts/feeds install -p packages nping-ssl
#./scripts/feeds install -p packages ndiff
#./scripts/feeds install -p packages ndiff-src
echo 'checking packages from node'
./scripts/feeds install -p packages node
#./scripts/feeds install -p packages node-npm
echo 'checking packages from ola'
./scripts/feeds install -p packages ola
echo 'checking packages from openldap'
./scripts/feeds install -p packages libopenldap
#./scripts/feeds install -p packages openldap-utils
#./scripts/feeds install -p packages openldap-server
echo 'checking packages from openpgm'
./scripts/feeds install -p packages openpgm
echo 'checking packages from openssh'
./scripts/feeds install -p packages openssh-client
#./scripts/feeds install -p packages openssh-moduli
#./scripts/feeds install -p packages openssh-client-utils
#./scripts/feeds install -p packages openssh-keygen
#./scripts/feeds install -p packages openssh-server
#./scripts/feeds install -p packages openssh-server-pam
#./scripts/feeds install -p packages openssh-sftp-client
#./scripts/feeds install -p packages openssh-sftp-server
#./scripts/feeds install -p packages openssh-sftp-avahi-service
echo 'checking packages from p11-kit'
./scripts/feeds install -p packages p11-kit
echo 'checking packages from pagekitec'
./scripts/feeds install -p packages pagekitec
#./scripts/feeds install -p packages libpagekite
echo 'checking packages from pciutils'
./scripts/feeds install -p packages libpci
#./scripts/feeds install -p packages pciutils
echo 'checking packages from pcre2'
./scripts/feeds install -p packages libpcre2
#./scripts/feeds install -p packages libpcre2-16
#./scripts/feeds install -p packages libpcre2-32
echo 'checking packages from perl'
./scripts/feeds install -p packages perl
#./scripts/feeds install -p packages perlbase-anydbm-file
#./scripts/feeds install -p packages perlbase-app
#./scripts/feeds install -p packages perlbase-archive
#./scripts/feeds install -p packages perlbase-arybase
#./scripts/feeds install -p packages perlbase-attribute
#./scripts/feeds install -p packages perlbase-attributes
#./scripts/feeds install -p packages perlbase-autodie
#./scripts/feeds install -p packages perlbase-autoloader
#./scripts/feeds install -p packages perlbase-autosplit
#./scripts/feeds install -p packages perlbase-autouse
#./scripts/feeds install -p packages perlbase-b
#./scripts/feeds install -p packages perlbase-base
#./scripts/feeds install -p packages perlbase-benchmark
#./scripts/feeds install -p packages perlbase-bigint
#./scripts/feeds install -p packages perlbase-bignum
#./scripts/feeds install -p packages perlbase-blib
#./scripts/feeds install -p packages perlbase-bytes
#./scripts/feeds install -p packages perlbase-charnames
#./scripts/feeds install -p packages perlbase-class
#./scripts/feeds install -p packages perlbase-compress
#./scripts/feeds install -p packages perlbase-config
#./scripts/feeds install -p packages perlbase-cpan
#./scripts/feeds install -p packages perlbase-cwd
#./scripts/feeds install -p packages perlbase-data
#./scripts/feeds install -p packages perlbase-db
#./scripts/feeds install -p packages perlbase-db-file
#./scripts/feeds install -p packages perlbase-dbm-filter
#./scripts/feeds install -p packages perlbase-devel
#./scripts/feeds install -p packages perlbase-diagnostics
#./scripts/feeds install -p packages perlbase-digest
#./scripts/feeds install -p packages perlbase-dirhandle
#./scripts/feeds install -p packages perlbase-dumpvalue
#./scripts/feeds install -p packages perlbase-dumpvar
#./scripts/feeds install -p packages perlbase-dynaloader
#./scripts/feeds install -p packages perlbase-encode
#./scripts/feeds install -p packages perlbase-encoding
#./scripts/feeds install -p packages perlbase-english
#./scripts/feeds install -p packages perlbase-env
#./scripts/feeds install -p packages perlbase-errno
#./scripts/feeds install -p packages perlbase-essential
#./scripts/feeds install -p packages perlbase-experimental
#./scripts/feeds install -p packages perlbase-extutils
#./scripts/feeds install -p packages perlbase-fatal
#./scripts/feeds install -p packages perlbase-fcntl
#./scripts/feeds install -p packages perlbase-feature
#./scripts/feeds install -p packages perlbase-fields
#./scripts/feeds install -p packages perlbase-file
#./scripts/feeds install -p packages perlbase-filecache
#./scripts/feeds install -p packages perlbase-filehandle
#./scripts/feeds install -p packages perlbase-filetest
#./scripts/feeds install -p packages perlbase-filter
#./scripts/feeds install -p packages perlbase-findbin
#./scripts/feeds install -p packages perlbase-gdbm-file
#./scripts/feeds install -p packages perlbase-getopt
#./scripts/feeds install -p packages perlbase-hash
#./scripts/feeds install -p packages perlbase-http-tiny
#./scripts/feeds install -p packages perlbase-i18n
#./scripts/feeds install -p packages perlbase-if
#./scripts/feeds install -p packages perlbase-integer
#./scripts/feeds install -p packages perlbase-io
#./scripts/feeds install -p packages perlbase-ipc
#./scripts/feeds install -p packages perlbase-json-pp
#./scripts/feeds install -p packages perlbase-less
#./scripts/feeds install -p packages perlbase-list
#./scripts/feeds install -p packages perlbase-locale
#./scripts/feeds install -p packages perlbase-math
#./scripts/feeds install -p packages perlbase-memoize
#./scripts/feeds install -p packages perlbase-meta-notation
#./scripts/feeds install -p packages perlbase-mime
#./scripts/feeds install -p packages perlbase-module
#./scripts/feeds install -p packages perlbase-mro
#./scripts/feeds install -p packages perlbase-net
#./scripts/feeds install -p packages perlbase-next
#./scripts/feeds install -p packages perlbase-o
#./scripts/feeds install -p packages perlbase-opcode
#./scripts/feeds install -p packages perlbase-open
#./scripts/feeds install -p packages perlbase-ops
#./scripts/feeds install -p packages perlbase-ostype
#./scripts/feeds install -p packages perlbase-params
#./scripts/feeds install -p packages perlbase-perl5db
#./scripts/feeds install -p packages perlbase-perlio
#./scripts/feeds install -p packages perlbase-pod
#./scripts/feeds install -p packages perlbase-posix
#./scripts/feeds install -p packages perlbase-re
#./scripts/feeds install -p packages perlbase-safe
#./scripts/feeds install -p packages perlbase-scalar
#./scripts/feeds install -p packages perlbase-sdbm-file
#./scripts/feeds install -p packages perlbase-search
#./scripts/feeds install -p packages perlbase-selectsaver
#./scripts/feeds install -p packages perlbase-selfloader
#./scripts/feeds install -p packages perlbase-sigtrap
#./scripts/feeds install -p packages perlbase-socket
#./scripts/feeds install -p packages perlbase-sort
#./scripts/feeds install -p packages perlbase-storable
#./scripts/feeds install -p packages perlbase-symbol
#./scripts/feeds install -p packages perlbase-sys
#./scripts/feeds install -p packages perlbase-tap
#./scripts/feeds install -p packages perlbase-term
#./scripts/feeds install -p packages perlbase-test
#./scripts/feeds install -p packages perlbase-text
#./scripts/feeds install -p packages perlbase-thread
#./scripts/feeds install -p packages perlbase-threads
#./scripts/feeds install -p packages perlbase-tie
#./scripts/feeds install -p packages perlbase-time
#./scripts/feeds install -p packages perlbase-unicode
#./scripts/feeds install -p packages perlbase-unicore
#./scripts/feeds install -p packages perlbase-universal
#./scripts/feeds install -p packages perlbase-user
#./scripts/feeds install -p packages perlbase-utf8
#./scripts/feeds install -p packages perlbase-version
#./scripts/feeds install -p packages perlbase-xsloader
#./scripts/feeds install -p packages perl-tests-common
echo 'checking packages from postgresql'
./scripts/feeds install -p packages libpq
#./scripts/feeds install -p packages pgsql-cli
#./scripts/feeds install -p packages pgsql-cli-extra
#./scripts/feeds install -p packages pgsql-server
echo 'checking packages from procps-ng'
./scripts/feeds install -p packages procps-ng-free
#./scripts/feeds install -p packages procps-ng-kill
#./scripts/feeds install -p packages procps-ng-pgrep
#./scripts/feeds install -p packages procps-ng-pkill
#./scripts/feeds install -p packages procps-ng-pmap
#./scripts/feeds install -p packages procps-ng-ps
#./scripts/feeds install -p packages procps-ng-pwdx
#./scripts/feeds install -p packages procps-ng-skill
#./scripts/feeds install -p packages procps-ng-slabtop
#./scripts/feeds install -p packages procps-ng-snice
#./scripts/feeds install -p packages procps-ng-sysctl
#./scripts/feeds install -p packages procps-ng-tload
#./scripts/feeds install -p packages procps-ng-top
#./scripts/feeds install -p packages procps-ng-uptime
#./scripts/feeds install -p packages procps-ng-vmstat
#./scripts/feeds install -p packages procps-ng-w
#./scripts/feeds install -p packages procps-ng-watch
#./scripts/feeds install -p packages procps-ng
echo 'checking packages from protobuf'
./scripts/feeds install -p packages protobuf
#./scripts/feeds install -p packages protobuf-lite
echo 'checking packages from protobuf-c'
./scripts/feeds install -p packages libprotobuf-c
echo 'checking packages from python-pip-conf'
./scripts/feeds install -p packages python-pip-conf
echo 'checking packages from python3'
./scripts/feeds install -p packages python3-asyncio
#./scripts/feeds install -p packages python3-asyncio-src
#./scripts/feeds install -p packages python3-cgi
#./scripts/feeds install -p packages python3-cgi-src
#./scripts/feeds install -p packages python3-cgitb
#./scripts/feeds install -p packages python3-cgitb-src
#./scripts/feeds install -p packages python3-codecs
#./scripts/feeds install -p packages python3-codecs-src
#./scripts/feeds install -p packages python3-ctypes
#./scripts/feeds install -p packages python3-ctypes-src
#./scripts/feeds install -p packages python3-dbm
#./scripts/feeds install -p packages python3-dbm-src
#./scripts/feeds install -p packages python3-decimal
#./scripts/feeds install -p packages python3-decimal-src
#./scripts/feeds install -p packages python3-dev
#./scripts/feeds install -p packages python3-dev-src
#./scripts/feeds install -p packages python3-distutils
#./scripts/feeds install -p packages python3-distutils-src
#./scripts/feeds install -p packages python3-email
#./scripts/feeds install -p packages python3-email-src
#./scripts/feeds install -p packages python3-lib2to3
#./scripts/feeds install -p packages python3-lib2to3-src
#./scripts/feeds install -p packages python3-logging
#./scripts/feeds install -p packages python3-logging-src
#./scripts/feeds install -p packages python3-lzma
#./scripts/feeds install -p packages python3-lzma-src
#./scripts/feeds install -p packages python3-multiprocessing
#./scripts/feeds install -p packages python3-multiprocessing-src
#./scripts/feeds install -p packages python3-ncurses
#./scripts/feeds install -p packages python3-ncurses-src
#./scripts/feeds install -p packages python3-openssl
#./scripts/feeds install -p packages python3-openssl-src
#./scripts/feeds install -p packages python3-pip
#./scripts/feeds install -p packages python3-pip-src
#./scripts/feeds install -p packages python3-pkg-resources
#./scripts/feeds install -p packages python3-pkg-resources-src
#./scripts/feeds install -p packages python3-pydoc
#./scripts/feeds install -p packages python3-pydoc-src
#./scripts/feeds install -p packages python3-readline
#./scripts/feeds install -p packages python3-readline-src
#./scripts/feeds install -p packages python3-setuptools
#./scripts/feeds install -p packages python3-setuptools-src
#./scripts/feeds install -p packages python3-sqlite3
#./scripts/feeds install -p packages python3-sqlite3-src
#./scripts/feeds install -p packages python3-unittest
#./scripts/feeds install -p packages python3-unittest-src
#./scripts/feeds install -p packages python3-urllib
#./scripts/feeds install -p packages python3-urllib-src
#./scripts/feeds install -p packages python3-uuid
#./scripts/feeds install -p packages python3-uuid-src
#./scripts/feeds install -p packages python3-xml
#./scripts/feeds install -p packages python3-xml-src
#./scripts/feeds install -p packages libpython3
#./scripts/feeds install -p packages python3-base
#./scripts/feeds install -p packages python3-light
#./scripts/feeds install -p packages python3
#./scripts/feeds install -p packages python3-base-src
#./scripts/feeds install -p packages python3-light-src
echo 'checking packages from rrdtool1'
./scripts/feeds install -p packages librrd1
#./scripts/feeds install -p packages rrdcgi1
#./scripts/feeds install -p packages rrdtool1
echo 'checking packages from socat'
./scripts/feeds install -p packages socat
echo 'checking packages from sqlite3'
./scripts/feeds install -p packages libsqlite3
#./scripts/feeds install -p packages sqlite3-cli
echo 'checking packages from sshpass'
./scripts/feeds install -p packages sshpass
echo 'checking packages from sudo'
./scripts/feeds install -p packages sudo
echo 'checking packages from sysstat'
./scripts/feeds install -p packages sysstat
echo 'checking packages from tinc'
./scripts/feeds install -p packages tinc
echo 'checking packages from tree'
./scripts/feeds install -p packages tree
echo 'checking packages from u2pnpd'
./scripts/feeds install -p packages u2pnpd
echo 'checking packages from unbound'
./scripts/feeds install -p packages unbound-daemon
#./scripts/feeds install -p packages libunbound
#./scripts/feeds install -p packages unbound-anchor
#./scripts/feeds install -p packages unbound-checkconf
#./scripts/feeds install -p packages unbound-control
#./scripts/feeds install -p packages unbound-control-setup
#./scripts/feeds install -p packages unbound-host
echo 'checking packages from usbutils'
./scripts/feeds install -p packages usbutils
echo 'checking packages from uw-imap'
./scripts/feeds install -p packages uw-imap
echo 'checking packages from vsftpd'
./scripts/feeds install -p packages vsftpd
#./scripts/feeds install -p packages vsftpd-tls
echo 'checking packages from xz'
./scripts/feeds install -p packages xz-utils
#./scripts/feeds install -p packages liblzma
#./scripts/feeds install -p packages lzmadec
#./scripts/feeds install -p packages lzmainfo
#./scripts/feeds install -p packages xz
#./scripts/feeds install -p packages xzdec
#./scripts/feeds install -p packages xzdiff
#./scripts/feeds install -p packages xzgrep
#./scripts/feeds install -p packages xzless
#./scripts/feeds install -p packages xzmore
echo 'checking packages from zmq'
./scripts/feeds install -p packages libzmq-nc
#./scripts/feeds install -p packages libzmq-curve
echo 'checking packages from zoneinfo'
./scripts/feeds install -p packages zoneinfo-simple
#./scripts/feeds install -p packages zoneinfo-core
#./scripts/feeds install -p packages zoneinfo-africa
#./scripts/feeds install -p packages zoneinfo-northamerica
#./scripts/feeds install -p packages zoneinfo-southamerica
#./scripts/feeds install -p packages zoneinfo-poles
#./scripts/feeds install -p packages zoneinfo-asia
#./scripts/feeds install -p packages zoneinfo-atlantic
#./scripts/feeds install -p packages zoneinfo-australia-nz
#./scripts/feeds install -p packages zoneinfo-pacific
#./scripts/feeds install -p packages zoneinfo-europe
#./scripts/feeds install -p packages zoneinfo-india
#./scripts/feeds install -p packages zoneinfo-all
echo 'checking packages from zstd'
./scripts/feeds install -p packages libzstd
#./scripts/feeds install -p packages zstd
./scripts/feeds update plan44
echo 'checking packages from ace-p44script'
./scripts/feeds install -p plan44 ace-p44script
echo 'checking packages from hermel-config'
./scripts/feeds install -p plan44 hermel-config
echo 'checking packages from hermeld'
./scripts/feeds install -p plan44 hermeld
echo 'checking packages from hmt20-config'
./scripts/feeds install -p plan44 hmt20-config
echo 'checking packages from hxcmodplayer'
./scripts/feeds install -p plan44 hxcmodplayer
echo 'checking packages from kksdcm-config'
./scripts/feeds install -p plan44 kksdcm-config
echo 'checking packages from kksdcmd'
./scripts/feeds install -p plan44 kksdcmd
#./scripts/feeds install -p plan44 p44mbutil
echo 'checking packages from leth-config'
./scripts/feeds install -p plan44 leth-config
echo 'checking packages from lethd'
./scripts/feeds install -p plan44 lethd
echo 'checking packages from lora_gateway'
./scripts/feeds install -p plan44 lora_gateway
echo 'checking packages from messagetorch'
./scripts/feeds install -p plan44 messagetorch
echo 'checking packages from osal'
./scripts/feeds install -p plan44 osal
echo 'checking packages from p-net'
./scripts/feeds install -p plan44 p-net
echo 'checking packages from p44-extdev-elsner'
./scripts/feeds install -p plan44 p44-extdev-elsner
echo 'checking packages from p44-extdev-p44motorexp'
./scripts/feeds install -p plan44 p44-extdev-p44motorexp
echo 'checking packages from p44-ledchain'
./scripts/feeds install -p plan44 kmod-p44-ledchain
echo 'checking packages from p44audiobox-config'
./scripts/feeds install -p plan44 p44audiobox-config
echo 'checking packages from p44ayabd'
./scripts/feeds install -p plan44 p44ayabd
echo 'checking packages from p44bandit-config'
./scripts/feeds install -p plan44 p44bandit-config
echo 'checking packages from p44banditd'
./scripts/feeds install -p plan44 p44banditd
echo 'checking packages from p44devd'
./scripts/feeds install -p plan44 p44devd
echo 'checking packages from p44featured'
./scripts/feeds install -p plan44 p44featured
echo 'checking packages from p44ledchaintest'
./scripts/feeds install -p plan44 p44ledchaintest
echo 'checking packages from p44pagekite'
./scripts/feeds install -p plan44 p44pagekite
echo 'checking packages from p44sbb-config'
./scripts/feeds install -p plan44 p44sbb-config
echo 'checking packages from p44ttngw-config'
./scripts/feeds install -p plan44 p44ttngw-config
echo 'checking packages from p44utils-lvgl-sample'
./scripts/feeds install -p plan44 p44utils-lvgl-sample
echo 'checking packages from p44wiper-config'
./scripts/feeds install -p plan44 p44wiper-config
echo 'checking packages from p44wiperd'
./scripts/feeds install -p plan44 p44wiperd
echo 'checking packages from packet_forwarder'
./scripts/feeds install -p plan44 packet_forwarder
echo 'checking packages from pixelboard-config'
./scripts/feeds install -p plan44 pixelboard-config
echo 'checking packages from pixelboardd'
./scripts/feeds install -p plan44 pixelboardd
echo 'checking packages from rcswitch'
./scripts/feeds install -p plan44 kmod-rcswitch
echo 'checking packages from timidity'
./scripts/feeds install -p plan44 timidity
echo 'checking packages from ws2812-draiveris'
./scripts/feeds install -p plan44 kmod-ws2812-draiveris
./scripts/feeds update routing
echo 'checking packages from nodogsplash'
./scripts/feeds install -p routing nodogsplash
./scripts/feeds update stintel
echo 'checking packages from libcec'
./scripts/feeds install -p stintel libcec
#./scripts/feeds install -p stintel cec-client
echo 'checking packages from libp8-platform'
./scripts/feeds install -p stintel libp8-platform
