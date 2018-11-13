<?php

class Music
{
	public $title;
	public $artist;
	public $file;
	public $url;

	public function __construct($title, $artist, $file)
	{
		$this->title 	= $title;
		$this->artist 	= $artist;
		$this->file 	= 'musicas/' . $file;
		$this->url 		= 'http://www.hochmuth.com/mp3/' . $file;
	}
}
