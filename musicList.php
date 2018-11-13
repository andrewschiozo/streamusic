<?php
require_once 'Music.php';
require_once 'PlayList.php';

$PlayList = new PlayList();
$PlayList->add(	new Music('CONCERTO D-MAJOR', 'HAYDN', 'Haydn_Cello_Concerto_D-1.mp3'))
		 ->add(	new Music('TCHAIKOVSKY', 'ROCOCO-VARIATIONS', 'Tchaikovsky_Rococo_Var_orch.mp3'))
		 ->add(	new Music('VIVALDI SONATA', 'ADAGIO', 'Vivaldi_Sonata_eminor_.mp3'))
		 ->add(	new Music('TCHAIKOVSKY', 'NOCTURNE', 'Tchaikovsky_Nocturne__orch.mp3'))
		 ->add(	new Music('HAYDN', 'ADAGIO', 'Haydn_Adagio.mp3'))
		 ->add(	new Music('BOCCHERINI', 'CONCERTO IN D', 'Boccherini_Concerto_478-1.mp3'))
		 ->add(	new Music('BLOCH', 'PRAYER', 'Bloch_Prayer.mp3'))
		 ->add(	new Music('BEETHOVEN', 'VARIATIONS', 'Beethoven_12_Variation.mp3'));
$PlayList->output();
