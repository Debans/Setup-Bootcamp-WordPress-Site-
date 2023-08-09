<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u283525110_8Q6EO' );

/** MySQL database username */
define( 'DB_USER', 'u283525110_zk2zy' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Gbfdj4D4M7' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '[&fYAT9ebGJp0*vF%gmh8P2XqaLPY;6ZO:)[id~I!:jY`vk//Yqiv68B}DRX5_Tx' );
define( 'SECURE_AUTH_KEY',   '#yPr`[&3%?*|0HL`Bd.Y;!A<#Fk{G[,zrfZ55loU#:~i0l5,IE}xYP$@j}$Mnzr0' );
define( 'LOGGED_IN_KEY',     'P|#kq$dka:<W-*^|Q(6(3!M/3hJCp:q^gZM@&)5<ux&=x!uKxcf#A<9djNP-=s& ' );
define( 'NONCE_KEY',         'G*ev#3J]`PocL2ceP#UW9JS 5|n:Fe:_0{TIHX-x,/%<3p}765MO{91tyD6!))$|' );
define( 'AUTH_SALT',         'L]8`r P[5]DDj&CwMVf|}*JYyW!aM/q~5[H)$j=!ATJ3KXO],d#qA[S?G&V%eg=O' );
define( 'SECURE_AUTH_SALT',  'Rhf+,= 3H-B3QIU{w=?TT&e /)<Kx:okRCgo9GZf;griD:Gp7iq`#h9~yS DrpmK' );
define( 'LOGGED_IN_SALT',    'BXnt$2=)*!-3S^rns/$@M-:J}uh|uro>Y-QfY-%K~m,A#F?@VjfUZ!bITP08Lmbl' );
define( 'NONCE_SALT',        'ZyPCuojZQm6AoXFyd]umQq( 6)z=MH~R`SG?k>9Im%D;kAhR^TlFGK[UiYcqIyQv' );
define( 'WP_CACHE_KEY_SALT', '.M/%~MiCD^ha?BR8M+mdp>iOo<^s4#gw/%=%T@]L,1cez[C4b>RKyt8rLp}41K4A' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
